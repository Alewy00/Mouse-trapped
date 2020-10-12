const Game = require("./game")
function GameView(game, ctx, mouse) {
    this.game = game;
    this.ctx = ctx;
    this.mouse = mouse;
    GameView.key = false;
    this.start.bind(this);
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

GameView.prototype.start = function start(){
  window.addEventListener('keydown', function (e) {
    GameView.key = e.key
    // console.log(GameView.key)
  })
  window.addEventListener('keyup', function (e) {
  GameView.key = false;
  mouse.stop();
  })
  requestAnimationFrame(this.animate.bind(this));

}




GameView.prototype.animate = function animate(time) {
  // console.log("key is " + GameView.key)

  if (GameView.key && GameView.key == "s") {mouse.speedY = 3; }
  if (GameView.key && GameView.key == "w") {mouse.speedY = -3; }
  if (GameView.key && GameView.key == "a") {mouse.speedX = -3; }
  if (GameView.key && GameView.key == "d") {mouse.speedX = 3; }
  this.game.draw(this.ctx);
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;