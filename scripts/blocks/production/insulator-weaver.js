const insulatorWeaver = extendContent(GenericCrafter, "insulator-weaver", {

	draw(tile){

    Draw.rect(this.region, tile.drawx(), tile.drawy());

    Draw.color(tile.entity.liquids.current().color);
    Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
    Draw.color();
	},

	drawLayer(tile){

    Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},

	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-top")
		];
	},
	
});

insulatorWeaver.layer = Layer.turret;