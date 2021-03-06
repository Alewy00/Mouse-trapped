const Game = require("./game")
const GameView = require("./game_view");
import './styles/index.scss';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = Game.WIDTH;
    canvas.height = Game.HEIGHT;
    canvas.style="border:1px solid #000000;"
    const ctx = canvas.getContext("2d");
    const game = new Game(ctx); 
    new GameView(game, ctx, game.mouse).start();
  });
  