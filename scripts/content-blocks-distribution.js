const omni_bridge_conveyor = extendContent(BufferedItemBridge, "omni-bridge-conveyor", {

    load(){
        this.super$load();
        this.bridgeEndRegion = Core.atlas.find(this.name + "-end");
        this.bridgeRegion = Core.atlas.find(this.name + "-bridge");
        this.arrowRegion = Core.atlas.find(this.name + "-arrow");
    },

    linkValid(tile, other, checkDouble){
        if(other == tile || other == null || tile == null) return false;

        if(Math.pow(other.x - tile.x, 2) + Math.pow(other.y - tile.y, 2) > Math.pow(this.range + 0.5, 2))
            return false;

        return other.block() == this && (!checkDouble || other.ent().link != tile.pos());
    },

    canDump(tile){
        return true;
    },

    acceptItem(item, tile, source){
        entity = tile.ent();
        other = Vars.world.tile(entity.link);

        if(tile.getTeam() != source.getTeam())
            return false;

        if(this.linkValid(tile, other))
            return tile.entity.items.total() < this.bufferCapacity;

        return source.block() instanceof ItemBridge && source.ent().link == tile.pos() && tile.entity.items.total() < this.bufferCapacity;
    },

    drawPlace(x, y, rotation, valid){
        Draw.color(Pal.accent);
        Lines.stroke(2.0);
        Lines.circle(x * Vars.tilesize + 4, y * Vars.tilesize + 4, this.range * Vars.tilesize);

        link = this.findLink(x, y);

        if (link != null){
            const angle = Math.atan2(y - link.y, x - link.x);

            Draw.color(Pal.accent);
            Draw.rect("bridge-arrow", (link.x +  Math.cos(angle)) * Vars.tilesize + 4, (link.y + Math.sin(angle)) * Vars.tilesize + 4, angle * 180 / 3.14);
        }
        Draw.reset();
    },

    drawConfigure(tile){
        entity = tile.ent();

        Draw.color(Pal.accent);
        Lines.stroke(2.0);
        Lines.circle(tile.x * Vars.tilesize + 4, tile.y * Vars.tilesize + 4, this.range * Vars.tilesize);
        Draw.reset();

        Draw.color(Pal.accent);
        Lines.stroke(1.0);
        Lines.square(tile.drawx(), tile.drawy(), tile.block().size * Vars.tilesize / 2.0 + 1.0);

        Geometry.circle(tile.x, tile.y, this.range + 1, new Intc2(){get: (x, y) => {
            other = Vars.world.ltile(x, y);

            if(this.linkValid(tile, other)){
                linked = other.pos() == entity.link;

                Draw.color(linked ? Pal.place : Pal.breakInvalid);
                Lines.square(other.drawx(), other.drawy(), other.block().size * Vars.tilesize / 2.0 + 1.0 + (linked ? 0.0 : Mathf.absin(Time.time(), 4.0, 1.0)));
                }
            }
        });
        Draw.reset();
    },

    drawLayer(tile){
        entity = tile.ent();
        other = Vars.world.tile(entity.link);
        opacity = Core.settings.getInt("bridgeopacity") / 100.0;
        uptime = Vars.state.isEditor() ? 1.0 : entity.uptime;

        if(!this.linkValid(tile, other)) return;
        if(Mathf.zero(opacity)) return;

        const dirx = other.worldx() - tile.worldx()
        const diry = other.worldy() - tile.worldy()
        endx = dirx * uptime
        endy = diry * uptime

        Draw.color(Color.white, Color.black, Mathf.absin(Time.time(), 6.0, 0.07));
        Draw.alpha(Math.max(entity.uptime, 0.25) * opacity);

        const angle = Math.atan2(other.worldy() - tile.worldy(), other.worldx() - tile.worldx());

        Draw.rect(this.bridgeEndRegion, tile.worldx() + 4, tile.worldy() + 4, 90 + angle * 180 / 3.14);
        Draw.rect(this.bridgeEndRegion, tile.worldx() + endx + 4, tile.worldy() + endy + 4, 270 + angle * 180 / 3.14);

        Lines.stroke(8.0);
        Lines.line(this.bridgeRegion, tile.worldx() + 4, tile.worldy() + 4, tile.worldx() + endx + 4, tile.worldy() + endy + 4, CapStyle.none, -Vars.tilesize / 2.0);

        const arrows = Math.floor(Math.sqrt(Math.pow(other.x - tile.x, 2) + Math.pow(other.y - tile.y, 2)) * Vars.tilesize / 6) - 1

        for(var a = 0; a != arrows; ++a){
            const othx = dirx / arrows * 0.666;
            const othy = diry / arrows * 0.666;
            Draw.alpha(Mathf.absin(a / arrows - entity.time / 100.0, 0.1, 1) * uptime * opacity);
            Draw.rect(this.arrowRegion, tile.worldx() + othx + (dirx - othx) * a / arrows * uptime + 4, tile.worldy() + othy + (diry - othy) * a / arrows * uptime + 4, angle * 180 / 3.14);
        }
        Draw.reset();
    },

});