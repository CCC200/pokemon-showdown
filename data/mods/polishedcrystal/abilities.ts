export const Abilities: {[k: string]: ModdedAbilityData} = {
    snowwarning: {
		inherit: true,
		onStart(source) {
			this.field.setWeather('hail');
		},
        shortDesc: "On switch-in, this Pokemon summons Hail.",
	},
	icebody: {
		inherit: true,
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
	},
	snowcloak: {
		inherit: true,
		desc: "If Hail is active, the accuracy of moves used against this Pokemon is multiplied by 0.8. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
	},
	slushrush: {
		inherit: true,
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
	},
};
