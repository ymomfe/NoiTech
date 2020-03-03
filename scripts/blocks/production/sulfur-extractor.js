const sulfurExtractor = extendContent(GenericCrafter, "sulfur-extractor", {

	draw(tile){

    Draw.rect(this.region, tile.drawx(), tile.drawy());

    Draw.color(tile.entity.liquids.current().color);
    Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
    Draw.color();
	},

	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},
	
});

insulatorWeaver.layer = Layer.turret;