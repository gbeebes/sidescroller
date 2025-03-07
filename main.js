class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    render(){
        this.ctx.fillRect(100, 100, 50, 150);
    }
}


window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getCsontext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);
    game.render();
});