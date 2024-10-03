class Placar {
    constructor (ctx) {
        this.ctx = ctx
        this.direita = this.ctx.canvas.width;
        this.margem = 10;
        this.margemDireita = 50;
        this.largura = 100;
    }

    draw () {
        this.ctx.font = "70px arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(pontoJogador1, this.margem, this.margem + 70, this.largura);
        this.ctx.fillText(pontoJogador2, this.direita - this.margemDireita, this.margem + 70, this.largura);
    }
}