const health = 2640;
const cooldown = 240;
const regen = 75;
const naquadaWallLarge = extendContent(Wall, "naquada-wall-large", {
	update(tile) {
		if (tile.entity.health() < tile.entity.maxHealth() & tile.entity.timer.get(0, cooldown)) {
			Effects.effect(Fx.healBlockFull, Tmp.c1.set(Color.valueOf("c082bb")), tile.drawx(), tile.drawy(), tile.block().size);
			tile.entity.healBy(regen);
		}
	}
});
