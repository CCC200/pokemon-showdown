export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		inherit: true,
		ruleset: [
			// Standard rules
			'Obtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Species Clause', 'Nickname Clause', 'OHKO Clause',
			'Evasion Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
			// Polished specific
			'Sleep Clause Mod', 'Freeze Clause Mod', 'Terastal Clause', 'DryPass Clause',
		],
		banlist: ['Moody'],
		onValidateSet(set) {
			console.log(set.ivs);
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
			ivStats.forEach(stat => {
				if (set.ivs[stat.toLowerCase()] > 15)
					return [`${species}'s ${stat} DV is above 15. Please set its value to 15 or lower.`];
			});
		},
	},
};
