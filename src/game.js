const GameView = require("./game_view");
const Mouse = require("./mouse")
const Wall = require("./wall")
const Block = require("./block")
const Button = require("./button")

function Game() {
    mouse = new Mouse(70, 70);
    walls = [];
    blocks = [];
    buttons = [];
    this.drawWall(10, 700, 0, 0)
    this.drawWall(10, 700, 1190, 0)
    this.drawWall(1200, 10, 0, 0)
    this.drawWall(1200, 10, 0, 590) 
    this.drawBlock(20, 300, 900, 10, "rgb(50,205,50)", false)
    this.drawBlock(290, 20, 900, 300, "rgb(50,205,50)", false)
    this.drawButton(35, 35, 700 ,20, blocks,"rgb(50,205,50)")
    // Green Wall 
    this.drawBlock(20, 300, 200, 10, "rgb(50,205,50)", false)
    this.drawBlock(290, 20, 900, 300, "rgb(50,205,50)", false)   

}



Game.BG_COLOR = "#D3D3D3";
Game.WIDTH = 1200;
Game.HEIGHT = 600;

    Game.prototype.drawWall = function drawWall(w, h, x, y) {
        let wall = new Wall(w, h, x, y)
        walls.push(wall)
    }

    Game.prototype.drawButton = function drawWall(w, h, x, y, block, color) {
        let button = new Button(w, h, x, y, block, color)
        buttons.push(button)
    }

    Game.prototype.drawBlock = function drawBlock(w, h, x, y, color, tile) {
        let block = new Block(w, h, x, y, color, tile)
        blocks.push(block)
    }
    
    Game.prototype.draw = function draw(ctx) {
    
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    walls.forEach(function(obj){
        obj.draw(ctx)
    })
    blocks.forEach(function(obj){
        obj.draw(ctx)
        obj.collide(mouse);
    })
    
    buttons.forEach(function(obj){
        obj.draw(ctx)
        // obj.collideX(mouse);
    })
    mouse.draw(ctx, walls);
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