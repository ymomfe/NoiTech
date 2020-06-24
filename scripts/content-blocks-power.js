const liquid_combustion_generator = extendContent(SingleTypeGenerator, "liquid-combustion-generator", {

	load(){
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	getLiquidEfficiency(liquid){
		return 1.0;
	},
	getItemEfficiency(item){
		return 0.0;
	},

	draw(tile){
		entity = tile.ent();
		heatColor = Color.valueOf("ff9b59");

		Draw.rect(this.region, tile.drawx(), tile.drawy());

		Draw.color(heatColor);
		Draw.alpha(Mathf.absin(Time.time(), 8, 0.6) * entity.productionEfficiency);
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());

		Draw.reset();
	}
	
});



const oil_combustion_generator = extendContent(SingleTypeGenerator, "oil-combustion-generator", {

	load(){
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	getLiquidEfficiency(liquid){
		return 1.0;
	},
	getItemEfficiency(item){
		return 0.0;
	},

	draw(tile){
		entity = tile.ent();
		heatColor = Color.valueOf("ff9b59");

		Draw.rect(this.region, tile.drawx(), tile.drawy());

		Draw.color(heatColor);
		Draw.alpha(Mathf.absin(Time.time(), 8, 0.6) * entity.productionEfficiency);
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());

		Draw.reset();
	}
	
});



const thermal_liquid_generator = extendContent(SingleTypeGenerator, "thermal-liquid-generator", {

	load(){
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.topRegion = Core.atlas.find(this.name + "-top");
    },

	getLiquidEfficiency(liquid){
		return 1.0;
	},
	getItemEfficiency(item){
		return 0.0;
	},

	draw(tile){
		entity = tile.ent();
		heatColor = Color.valueOf("ff9b59");

		Draw.rect(this.region, tile.drawx(), tile.drawy());

		Draw.color(heatColor);
		Draw.alpha(Mathf.absin(Time.time(), 8, 0.6) * entity.productionEfficiency);
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());

		Draw.reset();
	},

	drawLight(tile){
		renderer = Vars.renderer;
		entity = tile.ent();
		
		renderer.lights.add(tile.drawx(), tile.drawy(), (40 + Mathf.absin(10, 5)) * entity.productionEfficiency * this.size, Color.scarlet, 0.4);
	}

});