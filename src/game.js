const GameView = require("./game_view");
const Mouse = require("./mouse")
const Wall = require("./wall")
const Block = require("./block")
const Button = require("./button")

function Game() {
    this.mouse = new Mouse(20, 600);
    walls = [];
    this.blocks = [];
    buttons = [];
    this.playing = false
    // boulder = "";
    this.drawBlock(10, 700, 0, 0, "rgb(210,105,30)", false)
    this.drawBlock(10, 700, 1190, 0, "rgb(210,105,30)", false)
    this.drawBlock(1200, 10, 0, 0, "rgb(210,105,30)", false)
    this.drawBlock(1200, 10, 0, 590, "rgb(210,105,30)", false) 
     // Blue Wall Top right
    this.drawBlock(20, 300, 900, 10, "rgba(0, 181, 204, 1)", false)
    this.drawBlock(290, 20, 900, 300, "rgba(0, 181, 204, 1)", false)
    this.drawButton(35, 35, 700 ,20, this.blocks,"rgb(50,205,50)")
    this.drawButton(35, 35, 20 ,90, this.blocks,"rgb(50,205,50)")
    // Green Wall Top left
    this.drawBlock(20, 300, 200, 10, "rgb(50,205,50)", false)
    this.drawBlock(210, 20, 10, 298, "rgb(50,205,50)", false) 
    // Green wall Top Right
    this.drawBlock(20, 280, 920, 10, "rgb(50,205,50)", false)
    this.drawBlock(270, 20, 920, 280, "rgb(50,205,50)", false)
    this.drawButton(35, 35, 20 ,20, this.blocks,"rgba(0, 181, 204, 1)")
    // Red Wall 
    this.drawBlock(20, 238, 180, 60, "rgb(248,0,0)", false)
    this.drawBlock(190, 20, 10, 60, "rgb(248,0,0)", false)
    this.drawBlock(190, 21, 10, 277, "rgb(248,0,0)", false)
    this.drawButton(35, 35, 1150 ,150, this.blocks,"rgb(248,0,0)")
    // Pink Wall 
    this.drawBlock(20, 265, 220, 60, "rgb(255,20,147)", false)
    this.drawBlock(230, 20, 10, 320, "rgb(255,20,147)", false) 
    this.drawButton(35, 35, 1150 ,100, this.blocks,"rgb(255,20,147)")
    // Orange Wall
    this.drawBlock(950, 20, 240, 320, "rgba(248, 148, 6, 1)", false)
    // this.drawButton(35, 35, 760 ,430, blocks,"rgba(248, 148, 6, 1)")
    // Purple wall 
    this.drawBlock(20, 250, 240, 340, "rgba(140, 20, 252, 1)", false)
    // this.drawBlock(20, 250, 1000, 340, "rgba(140, 20, 252, 1)", true)
    // this.drawBlock(190, 20, 1000, 340, "rgba(140, 20, 252, 1)", true)
    this.drawButton(35, 35, 15 ,550, this.blocks,"rgba(140, 20, 252, 1)")
    // this.drawButton(35, 35, 290 ,550, blocks,"rgba(140, 20, 252, 1)")
    // Bottom Blue wall
//    this.drawBlock(20, 100, 260, 490, "rgb(255,20,147)", true)
//     this.drawBlock(20, 100, 340, 490, "rgb(255,20,147)", true)
//     this.drawBlock(100, 20, 260, 490, "rgb(255,20,147)", true) 
     // Yellow Maze
    //  this.drawBlock(200, 20, 360, 490, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(400, 20, 260, 400, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(20, 100, 550, 490, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(200, 20, 550, 570, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(20, 100, 650, 400, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(20, 190, 730, 400, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(200, 20, 730, 400, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(20, 140, 910, 400, "rgba(245, 229, 27, 1)", false)
    //  this.drawBlock(20, 60, 260, 340, "rgba(245, 229, 27, 1)", false)
    //  this.drawButton(35, 35, 480 ,530, blocks,"rgba(245, 229, 27, 1)")









}



Game.BG_COLOR = "#D3D3D3";
Game.WIDTH = 1200;
Game.HEIGHT = 600;

    Game.prototype.drawWall = function drawWall(w, h, x, y) {
        let wall = new Wall(w, h, x, y)
        walls.push(wall)
    }

    Game.prototype.drawButton = function drawWall(w, h, x, y, block, color) {
        let button = new Button(this, w, h, x, y, block, color)
        buttons.push(button)
    }

    Game.prototype.drawBlock = function drawBlock(w, h, x, y, color, tile) {
        let block = new Block(w, h, x, y, color, tile)
        this.blocks.push(block)
        return block;
    }
    
    Game.prototype.draw = function draw(ctx) {
    mouse = this.mouse
    ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    walls.forEach(function(obj){
        obj.draw(ctx)
    })
    this.blocks.forEach(function(obj){
        obj.draw(ctx)
        obj.collide(mouse, true);
    })
    
    buttons.forEach(function(obj){
        obj.draw(ctx)
        // obj.collideX(mouse);
    })
    this.mouse.draw(ctx, walls, this.blocks, buttons);
    
};

  
Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    if (pos[0] < 0){
            this.mouse.reset(1, pos[1])
    } 
    if (pos[1] < 0){
        this.mouse.reset(pos[0], 0)
    } 
     if(pos[0] > Game.WIDTH) {
        this.mouse.reset(Game.WIDTH - 1, pos[1])
     }
    if(pos[1] > Game.HEIGHT){
        this.mouse.reset(pos[0], Game.HEIGHT - 1)
    }
  };






//   Game.prototype.sounds = function sounds(sound){
//         if(this.playing){
//             sound.play()
//             this.playing = false
//         }
//   };



  module.exports = Game;