/*Condenser*/
const condenser = extendContent(SolidPump, "condenser", {
	draw(tile){
   		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
  	    Draw.color(tile.entity.liquids.current().color);
   		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    	Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
    	Draw.color();
    	Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});
condenser.layer = Layer.turret;

/*Sulfur Extraction Tower*/
const sulfurExtractionTower = extendContent(GenericCrafter, "sulfur-extraction-tower", {
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
sulfurExtractionTower.layer = Layer.turret;

/*Water Extraction Tower*/
const waterExtractionTower = extendContent(SolidPump, "water-extraction-tower", {
	draw(tile){
		var entity = tile.ent();
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(tile.entity.liquids.current().color);
   		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    	Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
    	Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-rotator"), tile.drawx(), tile.drawy(), entity.pumpTime * this.rotateSpeed);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});
waterExtractionTower.layer = Layer.turret;

//final print
print("[lightgray]blocks/drills - is successfully loaded.")