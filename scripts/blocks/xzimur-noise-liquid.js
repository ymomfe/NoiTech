/*Omni-Bridge Conduit*/
const XZimurNoiseOmniBridgeConduit = extendContent(LiquidExtendingBridge, "omni-bridge-conduit", {
	linkValid(tile, other, checkDouble){
		if(other == tile || other == null || tile == null) return false;
		if(Math.pow(other.x - tile.x, 2) + Math.pow(other.y - tile.y, 2) > Math.pow(this.range + 0.5, 2)) return false;
		return other.block() == this && (!checkDouble || other.ent().link != tile.pos());
	},
	canDumpLiquid(tile, to, liquid) {
        return true;
    },
	acceptItem(item, tile, source) {
	    return false;
    },
    acceptLiquid(tile, source, liquid, amount) {  
        entity = tile.ent();
        other = Vars.world.tile(entity.link);
        if(tile.getTeam() != source.getTeam() || !this.hasLiquids) return false;
        if(this.linkValid(tile, other)) return tile.entity.liquids.get(liquid) + amount < this.liquidCapacity && (tile.entity.liquids.current() == liquid || tile.entity.liquids.get(tile.entity.liquids.current()) < 0.2);
        return source.block() instanceof ItemBridge && source.ent().link == tile.pos();
    },
	drawPlace(x, y, rotation, valid) {
        Draw.color(Pal.accent);
        Lines.stroke(2.0);
        Lines.circle(x * Vars.tilesize, y * Vars.tilesize, this.range * Vars.tilesize);
        link = this.findLink(x, y);
        if (link != null) {
            Draw.color(Pal.accent);
            const angle = Math.atan2(y - link.y, x - link.x);
            Draw.rect("bridge-arrow", (link.x +  Math.cos(angle)) * Vars.tilesize, (link.y + Math.sin(angle)) * Vars.tilesize, angle * 180 / 3.14);
        }
    	Draw.reset();
    },
    drawConfigure(tile) {
        var entity = tile.ent(); 
        Draw.color(Pal.accent);
        Lines.stroke(2.0);
        Lines.circle(tile.x * Vars.tilesize, tile.y * Vars.tilesize, this.range * Vars.tilesize);
        Draw.reset();
        Draw.color(Pal.accent);
        Lines.stroke(1.0);
        Lines.square(tile.drawx(), tile.drawy(),
        tile.block().size * Vars.tilesize / 2.0 + 1.0);
        Geometry.circle(tile.x, tile.y, this.range + 1, new Intc2(){get: (x, y) => {
            other = Vars.world.ltile(x, y);
            if(this.linkValid(tile, other)) {
                var linked = other.pos() == entity.link;
                Draw.color(linked ? Pal.place : Pal.breakInvalid);
                Lines.square(other.drawx(), other.drawy(),
                other.block().size * Vars.tilesize / 2.0 + 1.0 + (linked ? 0.0 : Mathf.absin(Time.time(), 4.0, 1.0)));
            	}
            }
        });
        Draw.reset();
    },
    drawLayer(tile) {
        var entity = tile.ent();
		var other = Vars.world.tile(entity.link);
        var opacity = Core.settings.getInt("bridgeopacity") / 100.0;
        var uptime = Vars.state.isEditor() ? 1.0 : entity.uptime;
        if(!this.linkValid(tile, other)) return;
		if(Mathf.zero(opacity)) return;
        const dx = other.worldx() - tile.worldx()
        const dy = other.worldy() - tile.worldy()
        var ex = dx * uptime
        var ey = dy * uptime
        Draw.color(Color.white, Color.black, Mathf.absin(Time.time(), 6.0, 0.07));
        Draw.alpha(Math.max(entity.uptime, 0.25) * opacity); 
        const angle = Math.atan2(other.worldy() - tile.worldy(), other.worldx() - tile.worldx());                                            
        Draw.rect(Core.atlas.find(this.name + "-end"), tile.worldx(), tile.worldy(), 90 + angle * 180 / 3.14);
        Draw.rect(Core.atlas.find(this.name + "-end"), tile.worldx() + ex, tile.worldy() + ey, 270 + angle * 180 / 3.14);
        Lines.stroke(8.0);
        Lines.line(Core.atlas.find(this.name + "-bridge"), tile.worldx(), tile.worldy(), tile.worldx() + ex, tile.worldy() + ey, CapStyle.none, -Vars.tilesize / 2.0);
        const arrows = Math.floor(Math.sqrt(Math.pow(other.x - tile.x, 2) + Math.pow(other.y - tile.y, 2)) * Vars.tilesize / 6) - 1
        for(var a = 0; a != arrows; ++a) {
            const ox = dx / arrows * 0.666;
            const oy = dy / arrows * 0.666;
            Draw.alpha(Mathf.absin(a / arrows - entity.time / 100.0, 0.1, 1) * uptime * opacity);
            Draw.rect(Core.atlas.find(this.name + "-arrow"), tile.worldx() + ox + (dx - ox) * a / arrows * uptime, tile.worldy() + oy + (dy - oy) * a / arrows * uptime, angle * 180 / 3.14);
        }
        Draw.reset();
    },
});

//final print
print("[lightgray]blocks/liquid - is successfully loaded.")