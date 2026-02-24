export const Rulesets: {[k: string]: ModdedFormatData} = {
    standard: {
        inherit: true,
        ruleset: [
            // Standard RBY
            'Obtainable', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
            // ColorPlus
            'Accuracy Moves Clause', 'Allow Tradeback',
        ],
        banlist: ['Dig', 'Fly'],
	},
};
