const Game = require("./game")
function GameView(game, ctx, mouse) {
    this.game = game;
    this.ctx = ctx;
    this.mouse = mouse;
    GameView.key = false;
    this.start.bind(this);
    this.down = true
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};
GameView.prototype.start = function start(){
  window.addEventListener('keydown', function (e) {
    if(this.down){
      GameView.key = e.key; 
    }
    this.down = false
  // console.log(GameView.key)
  })
  window.addEventListener('keyup', function (e) {
    GameView.key = false;
    mouse.stop();
    this.down = true;
  })
  requestAnimationFrame(this.animate.bind(this));
}








GameView.prototype.animate = function animate(time) {
  // console.log("key is " + GameView.key)
  if (GameView.key && GameView.key == "q") {
    GameView.key = false;
    buttons.forEach(function(obj){
     obj.collideX(mouse)
  })
   }
  if (GameView.key && GameView.key == "s") {
    mouse.speedY = 3;
    mouse.dir = [0, 1]; 
    GameView.key = false;
   
  }
  if (GameView.key && GameView.key == "w") {
    GameView.key = false;
    mouse.dir = [0, -1]; 
    mouse.speedY = -3; 
  }

  if (GameView.key && GameView.key == "a") {
    GameView.key = false;
    mouse.dir = [- 1,0]; 
    mouse.speedX = -3; 
  }

  if (GameView.key && GameView.key == "d") {
    GameView.key = false;
    mouse.dir = [1,0];  
    mouse.speedX = 3; 
  }
  if (GameView.key && GameView.key == "f") {
    mouse.throwBoulder()
    GameView.key = false;
   
  }
  this.game.draw(this.ctx);
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;