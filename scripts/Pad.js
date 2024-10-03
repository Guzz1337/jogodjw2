class Pad {
    constructor (ctx, keyboard) {
        this.ctx = ctx;
        this.keyboard = keyboard;
        this.x = 5;
        this.vel = 5;
        this.largura = 20;
        this.altura = 100;
        this.y = (this.ctx.canvas.height/2)-(this.altura/2);
    }

    management () {
        if (this.keyboard.cima) {
            if (this.y > 0 && this.y + 5) {
                this.y -= this.vel;
            }
        }    
        if (this.keyboard.baixo) {
            if (this.y<this.ctx.canvas.height-this.altura - 5) {
                this.y += this.vel;
            }
        }
    }

    draw () {
        this.management ();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}