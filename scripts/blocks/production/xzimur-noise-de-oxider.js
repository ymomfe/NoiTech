const XZimurNoiseDeOxider = extendContent(GenericCrafter, "de-oxider", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
		drawer = entity => {
            Draw.rect(region, entity.x(), entity.y());
            Draw.alpha(Mathf.absin(entity.totalProgress, 3, 0.9) * entity.warmup);
            Draw.rect(Core.atlas.find(this.name + "-top"), entity.x(), entity.y());
            Draw.reset();
        };
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name)
		];
	},	
});