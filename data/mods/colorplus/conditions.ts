export const Conditions: {[k: string]: ModdedConditionData} = {
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target) {
			this.add('-status', target, 'frz');
		},
		onBeforeMovePriority: 12,
		onBeforeMove(pokemon, target, move) {
			this.add('cant', pokemon, 'frz');
			pokemon.lastMove = null;
			return false;
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.secondary && move.secondary.status === 'brn') {
				target.cureStatus();
			}
		},
		// GSC thaw chance
		onResidualOrder: 7,
		onResidual(pokemon) {
			if (this.randomChance(25, 256)) pokemon.cureStatus();
		},
	},
};
