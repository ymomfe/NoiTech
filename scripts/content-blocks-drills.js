const mechanical_water_extractor = extendContent(SolidPump, "mechanical-water-extractor", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.liquidRegion = Core.atlas.find(this.name + "-liquid");
        this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
   		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

  	    Draw.color(tile.entity.liquids.current().color);
   		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    	Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
    	Draw.color();

    	Draw.rect(this.rotatorRegion, tile.drawx(), tile.drawy(), tile.entity.pumpTime * 2);

    	Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	},
    
});



const sulfur_extraction_tower = extendContent(GenericCrafter, "sulfur-extraction-tower", {

	load(){
        this.super$load();
        this.bottomRegion = Core.atlas.find(this.name + "-bottom");
        this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	draw(tile){
		Draw.rect(this.bottomRegion, tile.drawx(), tile.drawy());

		Draw.rect(this.rotatorRegion, tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2);

		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
	},

});