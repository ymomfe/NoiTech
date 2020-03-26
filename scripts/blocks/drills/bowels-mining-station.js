const bowelsMiningStation = extendContent(Separator, "bowels-mining-station", {
	draw(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		Draw.rect(Core.atlas.find(this.name + "-spinner"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-spinner"),
			Core.atlas.find(this.name + "-top")
		];
	},	
});
bowelsMiningStation.layer = Layer.turret;