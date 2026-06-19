import UNIQUE_MOVES from './unique-moves';

export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		inherit: true,
		ruleset: [
			// Standard rules
			'Obtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Species Clause', 'Nickname Clause', 'OHKO Clause',
			'Evasion Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
			// Polished specific
			'Sleep Clause Mod', 'Freeze Clause Mod', 'Terastal Clause', 'DryPass Clause', '!Obtainable Misc',
			'Any Hidden Power',
		],
		banlist: ['Moody', 'Mega', 'Razor Fang', 'King\'s Rock'],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const speciesid = this.toID(species);
			// Check real tiers of cosmetic formes
			if (species.isCosmeticForme) {
				const baseSpecies = this.dex.species.get(this.toID(species.baseSpecies));
				if (this.ruleTable.isBannedSpecies(baseSpecies)) {
					return [`${baseSpecies} is tagged ${baseSpecies.tier}, which is banned.`];
				}
			}
			// Verify DV limits
			const ivStats = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
			for (const stat of ivStats) {
				if (set.ivs[stat.toLowerCase()] > 15)
					return [`${species}'s ${stat} DV is above 15. Please set its value to 15 or lower.`];
			}
			// Mewtwo-Armored
			const itemid = this.toID(set.item);
			if (speciesid === 'mewtwoarmored' && itemid !== 'armorsuit')
				return [`Mewtwo-Armored must be holding the Armor Suit.`];
			else if (speciesid === 'mewtwo' && itemid === 'armorsuit')
				return ['Mewtwo cannot hold the Armor Suit without transforming. Switch the species to Mewtwo-Armored.'];
			// Unique Moves
			// get evolution line + unique moves
			const evo_line: string[] = [speciesid];
			if (species.prevo) {
				evo_line.push(this.toID(species.prevo));
				const nextPrevo = this.dex.species.get(this.toID(species.prevo));
				if (nextPrevo?.prevo)
					evo_line.push(this.toID(nextPrevo.prevo));
			}
			let uniques: string[] = [];
			UNIQUE_MOVES.forEach(um => {
				if (evo_line.includes(um.name))
					uniques = uniques.concat(um.moves);
			});
			// check moveset and mark uniques
			const moveset = set.moves.map(move => this.toID(move));
			const used_moves = uniques.filter(move => { return moveset.includes(move); });
			let marked_moves = used_moves.map(mm => {
				return { name: mm, learn: [], finalstage: true };
			});
			evo_line.forEach(mon => {
				const learnset = this.dex.species.learnsetCache.get(mon).learnset;
				marked_moves.forEach(move => {
					if (learnset[move.name]) {
						move.learn = move.learn.concat(learnset[move.name]);
						if (mon !== speciesid) move.finalstage = false;
					}
				});
			});
			marked_moves = marked_moves.filter(move => { return move.learn.length === 1; });
			// unique checks
			const move_one = this.dex.moves.get(marked_moves[0].name);
			if (marked_moves.length > 1) {
				const move_two = this.dex.moves.get(marked_moves[1].name);
				return [`${species} cannot use ${move_one} and ${move_two}.`];
			} else if (marked_moves[0].finalstage) {
				const learnset = this.dex.species.learnsetCache.get(speciesid).learnset;
				for (const move of set.moves) {
					if (learnset[this.toID(move)] === undefined) return [`${species} cannot use ${move} and ${move_one}.`];
				}
			}
		},
	},
};
