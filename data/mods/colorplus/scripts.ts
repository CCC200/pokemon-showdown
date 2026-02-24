export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen1',
	init() {
		// Restore gen 1 move descriptions
		for(const i in this.data.Moves) {
			const move = this.moves.get(i);
			if(move.gen === 1) {
				this.modData('Moves', i).desc = move.desc;
				this.modData('Moves', i).shortDesc = move.shortDesc;
			}
		}
	},
	teambuilderConfig: {
		rbyTradebacks: true,
		moveIsNotUseless(id: ID): boolean {
			const NOT_USELESS = [
				'dragonbreath', 'karatechop', 'gigadrain',
			];
			const NOW_USELESS = [
				'megadrain',
			];
			if(NOT_USELESS.includes(id)) return true;
			if(NOW_USELESS.includes(id)) return false;
		},
	},
	actions: {
		inherit: true,
		// Copied from gen1, check MOD comments for changes
		tryMoveHit(target, pokemon, move) {
			let damage: number | false | undefined = 0;

			// Add Thrashing effect before the move does damage, or add confusion if Thrash effect is ending
			if (move?.self?.volatileStatus === 'lockedmove') {
				if (pokemon.volatiles['lockedmove']) {
					pokemon.volatiles['lockedmove'].time--;
					if (!pokemon.volatiles['lockedmove'].time) {
						// Confusion begins even if already confused.
						// Remove lockedmove volatile when dealing with after move effects.
						delete pokemon.volatiles['confusion'];
						pokemon.addVolatile('confusion', pokemon, this.dex.conditions.get('lockedmove'));
					}
				} else {
					pokemon.addVolatile('lockedmove', pokemon, move);
				}
			}

			// First, check if the target is semi-invulnerable
			let hitResult = this.battle.runEvent('Invulnerability', target, pokemon, move);
			if (hitResult === false) {
				this.battle.attrLastMove('[miss]');
				this.battle.add('-miss', pokemon);
				if (move.selfdestruct) {
					this.battle.faint(pokemon, pokemon, move);
				}
				return false;
			}

			// Then, check if the Pokémon is immune to this move.
			if (
				(!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) &&
				!target.runImmunity(move.type, true)
			) {
				if (move.selfdestruct) {
					this.battle.faint(pokemon, pokemon, move);
				}
				return false;
			}
			hitResult = this.battle.singleEvent('TryImmunity', move, null, target, pokemon, move);
			if (hitResult === false) {
				this.battle.add('-immune', target);
				return false;
			}

			// Now, let's calculate the accuracy.
			let accuracy = move.accuracy;

			// Partial trapping moves: true accuracy while it lasts
			if (move.volatileStatus === 'partiallytrapped' && target === pokemon.volatiles['partialtrappinglock']?.locked) {
				accuracy = true;
			}

			// If a sleep inducing move is used while the user is recharging, the accuracy is true.
			if (move.status === 'slp' && target && target.volatiles['mustrecharge']) {
				accuracy = true;
			}

			// OHKO moves only have a chance to hit if the user is at least as fast as the target
			if (move.ohko) {
				if (target.getStat('spe') > pokemon.getStat('spe')) {
					this.battle.add('-immune', target, '[ohko]');
					return false;
				}
			}

			// Calculate true accuracy for gen 1, which uses 0-255.
			// Gen 1 uses the same boost table for accuracy and evasiveness as every other stat
			const boostTable = [25, 28, 33, 40, 50, 66, 100, 150, 200, 250, 300, 350, 400];
			if (accuracy !== true) {
				accuracy = Math.floor(accuracy * 255 / 100);
				// Rage and Thrash/Petal Dance accuracy bug
				if (pokemon.volatiles['lockedmove']) accuracy = pokemon.volatiles['lockedmove'].accuracy;
				if (pokemon.volatiles['rage']) accuracy = pokemon.volatiles['rage'].accuracy;

				// This line is just to satisfy TypeScript, accuracy should never be true at this point
				if (accuracy !== true) {
					// Check also for accuracy modifiers.
					if (!move.ignoreAccuracy) {
						accuracy = Math.floor(accuracy * (boostTable[pokemon.boosts.accuracy + 6] / 100));
					}
					if (!move.ignoreEvasion) {
						accuracy = Math.floor(accuracy * (boostTable[-target.boosts.evasion + 6] / 100));
					}
					accuracy = this.battle.clampIntRange(accuracy, 1, 255);
				}
				if (pokemon.volatiles['lockedmove']) pokemon.volatiles['lockedmove'].accuracy = accuracy;
				if (pokemon.volatiles['rage']) pokemon.volatiles['rage'].accuracy = accuracy;
			}
			accuracy = this.battle.runEvent('Accuracy', target, pokemon, move, accuracy);
			// Moves that target the user do not suffer from the 1/256 miss chance.
			if (move.target === 'self' && accuracy !== true) accuracy++;
			
			// MOD: remove gen1 miss
			if (accuracy !== true && !this.battle.randomChance(accuracy, 255)) {
				this.battle.attrLastMove('[miss]');
				this.battle.add('-miss', pokemon);
				damage = false;
				this.battle.lastDamage = 0;
			}

			// If damage is 0 and not false it means it didn't miss, let's calc.
			if (damage !== false) {
				if (move.multihit) {
					let hits = move.multihit;
					if (Array.isArray(hits)) {
						// Yes, it's hardcoded... meh
						if (hits[0] === 2 && hits[1] === 5) {
							hits = this.battle.sample([2, 2, 2, 3, 3, 3, 4, 5]);
						} else {
							hits = this.battle.random(hits[0], hits[1] + 1);
						}
					}
					hits = Math.floor(hits);
					// In gen 1, all the hits have the same damage for multihits move
					let moveDamage: number | undefined | false = 0;
					let i: number;
					for (i = 0; i < hits && target.hp && pokemon.hp; i++) {
						move.hit = i + 1;
						if (move.hit === hits) move.lastHit = true;
						moveDamage = this.moveHit(target, pokemon, move);
						if (moveDamage === false) break;
						damage = (moveDamage || 0);
						// Move damage is fixed to be the first move's damage
						if (i === 0) move.damage = damage;
						if (target.subFainted) {
							i++;
							break;
						}
					}
					move.damage = null;
					if (i === 0) return 1;
					this.battle.add('-hitcount', target, i);
				} else {
					damage = this.moveHit(target, pokemon, move);
				}
			}

			if (move.category !== 'Status') {
				target.gotAttacked(move, damage, pokemon);
			}

			if (move.selfdestruct) {
				if (!target.subFainted) {
					this.battle.faint(pokemon, pokemon, move);
				} else {
					this.battle.hint(`In Gen 1, the user of ${move.name} will not take damage if it breaks a Substitute.`);
				}
			}

			// The move missed.
			if (damage === false) {
				// Delete the partial trap lock if necessary.
				delete pokemon.volatiles['partialtrappinglock'];
				return false;
			}

			if (move.ohko) this.battle.add('-ohko');

			if (!move.negateSecondary) {
				this.battle.singleEvent('AfterMoveSecondary', move, null, target, pokemon, move);
				this.battle.runEvent('AfterMoveSecondary', target, pokemon, move);
			}

			return damage;
		},
	},
};
