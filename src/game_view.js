const Game = require("./game")
const Instructions = require("./instructions")
function GameView(game, ctx, mouse) {
    this.game = game;
    this.ctx = ctx;
    this.mouse = mouse;
    GameView.key = false;
    this.start.bind(this);
    this.down = true
    this.timer = game.timer
    this.interval = 0;
    
    
  }
  
  GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
  };
  GameView.prototype.startTime = function startTime(){
   
    
    this.interval = setInterval(function(){this.timer.seconds += 1}, 1000);
  }
  GameView.prototype.start = function start(){
    game = this.game
    this.startTime()
    gameview = this
    // console.log(this.timer)
    // interval = setInterval(gameview.timer(), 1000);
  // this.instructions.draw(this.ctx)


 
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

GameView.prototype.restart = function restart(){
    
}









GameView.prototype.timer = function timer() {
  game.timer.seconds += 1

}
GameView.prototype.animate = function animate(time) {
 
  // if (GameView.key && GameView.key == "q") {
  //   GameView.key = false;
  //   buttons.forEach(function(obj){
  //    obj.collideX(mouse)
  // })
  if(this.game.won){
    // console.log("stop")
   
    clearInterval(this.interval);
  }

  

  

  if (GameView.key && GameView.key == "c") {
    mouse.x = 450
    mouse.y = 200
    GameView.key = false;
  }

  // if (GameView.key && GameView.key == "q") {
  //   mouse.x = 450
  //   mouse.y = 200
  //   GameView.key = false;
  //   // this.timer.seconds = 0;
  //   // this.game = new Game(ctx);
  //   // this.start();

  // }
   
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
  if (GameView.key && GameView.key == "Enter") {
    mouse.throwBoulder()
    GameView.key = false;
   
  }
  this.game.draw(this.ctx);
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;