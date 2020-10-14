const game = require("./game");
const Boulder = require("./boulder");
const GameView = require("./game_view");
const gameView = require("./game_view") 


function Mouse(x, y) {
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.dir = [0, -1]
    this.boulder = null;
}

Mouse.prototype.draw = function draw(ctx, walls, blocks, buttons){
    this.move();
    if(this.boulder){
        if(this.boulder.collide(blocks) || this.boulder.collideButton(buttons)){
            this.boulder = null;
    }else{
        // ("draw")
        this.boulder.draw(ctx)
    }
    }
    this.isOutOfBounds([this.x, this.y])
    ctx.fillStyle = "rgb(248,0,0)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
}

Mouse.prototype.throwBoulder = function throwBoulder(){
    // console.log("mouse dir is" + this.dir)

    this.boulder = new Boulder(this.x + 10, this.y + 8, this.dir);
    // console.log( this.boulder)
    // boulder.move(this.dir) 
}

Mouse.prototype.move = function move() {
    // console.log(this.speedX)
    // console.log(this.speedY)
    // console.log("MOVE")
    this.x += this.speedX 
    this.y += this.speedY 
};

Mouse.prototype.stop = function stop() {
    // console.log("stop")
    this.speedX = 0;
    this.speedY = 0;
  }

  Mouse.prototype.isOutOfBounds = function isOutOfBounds(pos) {
   
    // console.log(game.HEIGHT)
    if (pos[0] < 10){
            this.reset(11, pos[1])
    } 
    if (pos[1] < 10){
        // console.log(pos[1])
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
    this.x -= 5
    this.y = this.y 
  };

  Mouse.prototype.resetUp = function resetUp(){
    this.x = this.x
    this.y -= 5
  };

  Mouse.prototype.resetDown = function resetDown(){
    this.x = this.x
    this.y += 5
  };

  Mouse.prototype.resetRight = function resetRight(){
    this.x += 5
    this.y = this.y
  };






module.exports = Mouse;
