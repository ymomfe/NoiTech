/*Fossils Liquidifier*/
const fossilsLiquidifier = extendContent(GenericCrafter, "fossils-liquidifier", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(tile.entity.liquids.current().color);
		Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-bottom-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2.5);
		Draw.rect(Core.atlas.find(this.name + "-top-rotator"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 1.5);
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});
fossilsLiquidifier = Layer.turret;

/*Heavy Oil Processor*/
const heavyOilProcessor = extendContent(GenericCrafter, "heavy-oil-processor", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
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
heavyOilProcessor.layer = Layer.turret;

/*Light Oil Processor*/
const lightOilProcessor = extendContent(GenericCrafter, "light-oil-processor", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
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
lightOilProcessor.layer = Layer.turret;

/*Mineral Extractor*/
const mineralExtractor = extendContent(GenericCrafter, "mineral-extractor", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(tile.entity.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-spinner"), tile.drawx() + 3, tile.drawy() + 3, tile.entity.totalProgress * 2);
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});
mineralExtractor.layer = Layer.turret;

/*Rock Crusher*/
const rockCrusher = extendContent(GenericCrafter, "rock-crusher", {
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
rockCrusher.layer = Layer.turret;

/*Phase Transformer*/
const phaseTransformer = extendContent(GenericCrafter, "phase-transformer", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		Draw.rect(Core.atlas.find(this.name + "-weave"), tile.drawx(), tile.drawy(), tile.entity.totalProgress);
		Draw.color(Pal.accent);
		Draw.alpha(tile.entity.warmup);
		Lines.lineAngleCenter(tile.drawx() + Mathf.sin(tile.entity.totalProgress, 6, Vars.tilesize / 3 * this.size), tile.drawy(), 90, this.size * Vars.tilesize / 2);
		Draw.reset();
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});
phaseTransformer.layer = Layer.turret;

//final print
print("[lightgray]blocks/noise-production.js - is successfully loaded.")