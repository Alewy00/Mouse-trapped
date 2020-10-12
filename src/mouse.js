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

Mouse.prototype.draw = function draw(ctx, walls){
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
   
    // console.log(game.HEIGHT)
    if (pos[0] < 10){
            this.reset(11, pos[1])
    } 
    if (pos[1] < 10){
        console.log(pos[1])
        this.reset(pos[0], 11)
    } 
     if(pos[0] > 1160) {
        this.reset(1160, pos[1])
     }
    if(pos[1] > 558){  
        this.reset(pos[0], 558)
    }
  };

  Mouse.prototype.reset = function reset(x, y){
    this.x = x;
    this.y = y;
  };

  Mouse.prototype.resetLeft = function resetLeft(){
    this.x -= 10
    this.y = this.y
  };

  Mouse.prototype.resetUp = function resetUp(){
    this.x = this.x
    this.y -= 10
  };

  Mouse.prototype.resetDown = function resetDown(){
    this.x = this.x
    this.y += 10
  };

  Mouse.prototype.resetRight = function resetRight(){
    this.x += 10
    this.y = this.y
  };






module.exports = Mouse;
