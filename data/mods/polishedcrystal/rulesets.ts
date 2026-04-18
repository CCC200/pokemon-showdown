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
			const speciesid = this.toID(species);
			const itemid = this.toID(set.item);
			if (speciesid === 'mewtwoarmored' && itemid !== 'armorsuit')
				return [`Mewtwo-Armored must be holding the Armor Suit.`];
			else if (speciesid === 'mewtwo' && itemid === 'armorsuit')
				return ['Mewtwo cannot hold the Armor Suit without transforming. Switch the species to Mewtwo-Armored.'];
		},
	},
};
