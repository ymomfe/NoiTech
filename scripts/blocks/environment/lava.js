const lava = extendContent(Floor, "lava", {
	draw(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());
	},
	drawLight(tile){
		renderer.lights.add(tile.drawx(), tile.drawy(), 100, Color.scarlet, 0.4);
	}
});