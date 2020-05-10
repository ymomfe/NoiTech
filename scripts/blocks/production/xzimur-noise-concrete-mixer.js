const XZimurNoiseConcreteMixer = extendContent(GenericCrafter, "concrete-mixer", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(Color.valueOf("a7ac7a"));
		Draw.alpha(tile.entity.items.total() / this.itemCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid-0"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.color(Color.valueOf("afb0ab"));
		Draw.alpha(tile.entity.totalProgress / tile.entity.items.total());
		Draw.rect(Core.atlas.find(this.name + "-liquid-1"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid-2"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-spinner-0"), tile.drawx() + 5, tile.drawy() - 5, tile.entity.totalProgress);
		Draw.rect(Core.atlas.find(this.name + "-spinner-1"), tile.drawx() - 8, tile.drawy() - 8.3, tile.entity.totalProgress * 2);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});