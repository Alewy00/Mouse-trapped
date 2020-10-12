const game = require("./game");
const GameView = require("./game_view");
const gameView = require("./game_view") 


function Mouse(x, y) {
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
}

Mouse.prototype.draw = function draw(ctx){
    // ctx = gameView.ctx;
    // console.log(this.width);
    this.move();
    this.isOutOfBounds([this.x, this.y])
    ctx.fillStyle = "rgb(248,0,0)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
}

Mouse.prototype.move = function move() {
    // console.log(this.speedX)
    // console.log(this.speedY)
    this.x += this.speedX 
    this.y += this.speedY 
};

Mouse.prototype.stop = function stop() {
    this.speedX = 0;
    this.speedY = 0;
  }

  Mouse.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    console.log(pos[0])
    // console.log(game.HEIGHT)
    if (pos[0] < 0){
            this.reset(1, pos[1])
    } 
    if (pos[1] < 0){
        console.log(pos[1])
        this.reset(pos[0], 1)
    } 
     if(pos[0] > 1170) {
        this.reset(1170, pos[1])
     }
    if(pos[1] > 568){  
        this.reset(pos[0], 568)
    }
  };

  Mouse.prototype.reset = function reset(x, y){
    this.x = x
    this.y = y
  };



module.exports = Mouse;
