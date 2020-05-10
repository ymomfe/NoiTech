const XZimurNoiseSulfurExtractionTower = extendContent(GenericCrafter, "sulfur-extraction-tower", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});