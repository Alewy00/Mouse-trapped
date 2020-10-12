const Mouse = require("./mouse")

function Game() {
    mouse = new Mouse(70, 70);
    
}



Game.BG_COLOR = "#D3D3D3";
Game.WIDTH = 1200;
Game.HEIGHT = 600;


  Game.prototype.draw = function draw(ctx) {
    
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    mouse.draw(ctx);
    // mouse.x += 1;
  };

  
Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    if (pos[0] < 0){
            mouse.reset(1, pos[1])
    } 
    if (pos[1] < 0){
        mouse.reset(pos[0], 0)
    } 
     if(pos[0] > Game.WIDTH) {
        mouse.reset(Game.WIDTH - 1, pos[1])
     }
    if(pos[1] > Game.HEIGHT){
        mouse.reset(pos[0], Game.HEIGHT - 1)
    }
  };






  Game.prototype.clear = function clear(){
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
  };



  module.exports = Game;