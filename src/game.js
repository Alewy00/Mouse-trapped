const GameView = require("./game_view");
const Mouse = require("./mouse")
const Wall = require("./wall")
const Block = require("./block")
const Button = require("./button")
const Timer = require("./timer")
// const Instructions = require("./instructions")
function Game() {
    ctx = "";
    this.blockade = new Block(20, 270, 220, 340,"rgb(210,105,30)", false)
    this.won = false
    this.start = true;
    this.retry = 0;
    this.mouse = new Mouse(510, 200);
    // this.mouse = new Mouse(60, 500);
    this.timer = new Timer(400, 200, this)
    walls = [];
    this.seconds = 54
    this.blocks = [];
    buttons = [];
    this.bottom = false
    this.playing = false
    // this.instructions = new Instructions(400, 200)
    first_time = true;
    this.maze = ""
    // boulder = "";
    this.drawBlock(10, 600, 0, 0, "rgb(210,105,30)", false)
    this.drawBlock(10, 500, 1190, 0, "rgb(210,105,30)", false)
    // this.drawBlock(10, 90, 1190, 500, "rgb(0,0,0)", true)
    walls.push(this.drawBlock(1200, 10, 0, 0, "rgb(210,105,30)", false))
    walls.push(this.drawBlock(1200, 10, 0, 590, "rgb(210,105,30)", false))
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
    // yellow button
    this.drawButton(35, 35, 20 ,200, this.blocks,"rgba(245, 229, 27, 1)")
    this.drawBlock(70, 20, 1120, 110, "rgba(245, 229, 27, 1)", false)
    this.drawBlock(70, 20, 1120, 20, "rgba(245, 229, 27, 1)", false)
    this.drawBlock(20, 110, 1120, 20, "rgba(245, 229, 27, 1)", false)
    // Pink Wall 
    this.drawBlock(20, 265, 220, 60, "rgb(255,20,147)", false)
    this.drawBlock(230, 20, 10, 320, "rgb(255,20,147)", false) 
    this.drawButton(35, 35, 1150 ,60, this.blocks,"rgb(255,20,147)")
    // Orange Wall
    this.drawBlock(950, 20, 240, 320, "rgba(248, 148, 6, 1)", false)
    // this.drawButton(35, 35, 760 ,430, blocks,"rgba(248, 148, 6, 1)")
    // Purple wall 
    this.maze = this.drawBlock(20, 250, 240, 340, "rgba(140, 20, 252, 1)", false)
    // this.drawBlock(20, 250, 1000, 340, "rgba(140, 20, 252, 1)", true)
    // this.drawBlock(190, 20, 1000, 340, "rgba(140, 20, 252, 1)", true)
    this.drawButton(35, 35, 15 ,550, this.blocks,"rgba(140, 20, 252, 1)")

 

}


Game.prototype.wins = function wins(ctx) {
    timer = this.timer
    if(this.mouse.x  > 1160) {
        this.won = true
        this.mouse.x = 20
        this.mouse.y = 520
    }else if(this.won){
    
        if(this.mouse.x < 0){
            this.mouse.x = 500
            this.mouse.y = 200
            this.won = false
            // this.timer = new Timer(400, 200)
            // new GameView(this,  ctx, this.mouse).start();
            location.reload();
            return null;
            // GameView.startTime()
            console.log("reset")
        }
        this.mouse.draw(ctx, walls, this.blocks, buttons);
        this.rankings(ctx, timer.minutes, timer.seconds)
        walls.push(this.drawBlock(10, 500, 0, 0, "rgb(210,105,30)", false))
        walls.push(this.drawBlock(10, 600, 1190, 0, "rgb(210,105,30)", false))
        walls.forEach(function(obj){
            obj.draw(ctx)
            obj.collide(this.mouse, true);
        })
        ctx.font = "80px Arial";
           
        ctx.fillStyle = "rgba(0, 181, 204, 1)";
        ctx.strokeStyle = "rgb(50,205,50)";
        ctx.fillText("You win!!", 100, 100)
        ctx.strokeText("You win!!", 100, 100)
        ctx.font = "30px Arial";
        ctx.fillText("<= Try again", 80, 550)
            ctx.strokeText("<= Try again", 80, 550)
            ctx.font = "80px Arial";
            ctx.strokeStyle = "rgba(0, 181, 204, 1)";
            ctx.fillStyle = "rgb(50,205,50)";
            if(timer.minutes < 10 && timer.seconds >= 10){
                ctx.strokeText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":" + timer.seconds, 460, 100)
                ctx.fillText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":" + timer.seconds, 460, 100)
            }else if(timer.minutes >= 10 && timer.seconds < 10){
                ctx.fillText("Your Time: " +  "0" + timer.hours + ":"+ timer.minutes + ":0" + timer.seconds, 460, 300)
                ctx.strokeText("Your Time: " +  "0" + timer.hours + ":"+ timer.minutes + ":0" + timer.seconds, 460, 300)
            }else if(timer.minutes < 10 && timer.seconds < 10){
                ctx.fillText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":0" + timer.seconds, 460, 100)
                ctx.strokeText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":0" + timer.seconds, 460, 100)
            }else{
                ctx.fillText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":0" + timer.seconds, 450, 100)  
                ctx.strokeText("Your Time: " + "0" + timer.hours + ":0"+ timer.minutes + ":0" + timer.seconds, 450, 100)  
            }
            
        
        }
        // if(this.mouse.y > 790 ){
        //     console.log("easy")
        //     this.bottom = true
        //     // ctx.strokeStyle = "rgba(245, 229, 27, 1)";
        //     // ctx.fillStyle = "rgba(248, 148, 6, 1)";
        //      ctx.font = "20px Arial";
        //     ctx.strokeText("You thought that was easy?", 200, 100)
        // // ctx.strokeText("You can throw the Cheese with the the ENTER button", 260, 150)
        // }
    };
    
    Game.prototype.rankings = function rankings(ctx, min, sec) {
        ctx.font = "60px Arial";
        // Mouserella!Mouserella!
        // A mouseketeer
        // Anonymouse.
        // Mr Mice guy
        
        ctx.strokeStyle = "rgba(245, 229, 27, 1)";
        ctx.fillStyle = "rgba(248, 148, 6, 1)";
        if(min < 1){
            ctx.strokeText("Ranking: Julius Cheeser!", 100, 300)
            ctx.fillText("Ranking: Julius Cheeser!", 100, 300)
            ctx.strokeText("Next Rank: Highest Rank already!", 100, 400)
            ctx.fillText("Next Rank: Highest Rank already!", 100, 400)
        }
        else if(min < 2 && sec <= 30){
            ctx.strokeText("Ranking: Mouseketeer!", 100, 300)
            ctx.strokeText("Next Rank: 00:01:00", 100, 400)
            ctx.fillText("Ranking: Mouseketeer!", 100, 300)
            ctx.fillText("Next Rank: 00:01:00", 100, 400)
        }
        else if(min < 2 ){
            ctx.strokeText("Ranking: Mouserella! ", 100, 300)
            ctx.strokeText("Next Rank: 00:01:30", 100, 400)
            ctx.fillText("Ranking: Mouserella! ", 100, 300)
            ctx.fillText("Next Rank: 00:01:30", 100, 400)
        }
        else if(min < 3 ){
            ctx.strokeText("Ranking: Mr Mice guy! ", 100, 300)
            ctx.strokeText("Next Rank: 00:01:59", 100, 400)
            ctx.fillText("Ranking: Mr Mice guy! ", 100, 300)
            ctx.fillText("Next Rank: 00:01:59", 100, 400)
        }
        else if(min < 7 ){
            ctx.strokeText("Ranking: Anonymouse! ", 100, 300)
            ctx.strokeText("Next Rank: 00:03:00", 100, 400)
            ctx.fillText("Ranking: Anonymouse! ", 100, 300)
            ctx.fillText("Next Rank: 00:03:00", 100, 400)
        }else{
            ctx.strokeText("Ranking: Ruiner of birthdays! ", 100, 300)
            ctx.strokeText("Next Rank: 00:07:00", 100, 400)
            ctx.fillText("Ranking: Ruiner of birthdays!", 100, 300)
            ctx.fillText("Next Rank: 00:07:00", 100, 400)
        }
        
    }
    
    
    
    Game.BG_COLOR = "#D3D3D3";
    Game.WIDTH = 1200;
    Game.HEIGHT = 600;
    
    //     Game.prototype.countdown = function countdown(seconds){
        // }
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
    
    Game.prototype.mazeStart = function mazeStart(ctx) {
        context = ctx
        game = this;

        // console.log(this.bottom)
        if(this.mouse.y > 290 && !this.bottom && this.start) {
            // console.log(this.bottom)
            setTimeout(function(){game.bottom = true},5000)
            // ctx.strokeStyle = "rgba(245, 229, 27, 1)";
            // ctx.fillStyle = "rgba(248, 148, 6, 1)";
             ctx.font = "40px Arial";
            ctx.strokeText("You thought that was easy?", 300, 400)
            ctx.strokeText("I'll make it a bit harder", 300, 500)
            // setTimeout(function(){ ctx.strokeText("You thoeasy?", 300, 300)},5000)
        // ctx.strokeText("You can throw the Cheese with the the ENTER button", 260, 150)
        }
        if(this.playing){
           this.drawCount(ctx, this.seconds)
           
        }
        else if(!this.playing){
            this.seconds = 54
         }
    }
    Game.prototype.drawCount = function drawCount(ctx, seconds) {
        ctx.font = "110px Arial";
        ctx.strokeText(seconds, 480, 150)
        ctx.font = "25px Arial";
        if(this.retry == 0){
        if(seconds > 48){
            ctx.strokeText("If you can't make it in time the timer will reset you", 250, 200)
        }
        else if(seconds > 42){
            ctx.strokeText("Difficult enough?", 250, 200)
        }
        else if(seconds > 35){
            ctx.strokeText("Oh come on I thought mice were supposed to be smart", 250, 200)
        }
        else if(seconds > 25){
            ctx.strokeText("ohhh I love watching them run", 250, 200)
        }
        else if(seconds > 18){
            ctx.strokeText("Halfway done! Man I love this song", 250, 200)
        }
        else if(seconds > 14){
            ctx.strokeText("We're leaving togetherrrrrrrr,", 250, 200)
        }
        else if(seconds > 10 ){
            ctx.strokeText("But still it's fareeewellll", 250, 200)
        }
        else if(seconds > 6 ){
            ctx.strokeText("And maybe we'll come backkkk", 250, 200)
        }
        else if(seconds > 2){
            ctx.strokeText("To earth, who can tellllll?", 250, 200)
        }
        else if(seconds > 0){
            ctx.strokeText("Times up!! MWAhahahaha", 250, 200)
        }
    }else if(this.retry == 1){
        if(seconds > 48){
            ctx.strokeText("I knew you wouldn't make it", 250, 200)
        }
        else if(seconds > 42){
            ctx.strokeText("The last mouse was so much smarter", 250, 200)
        }
        else if(seconds > 37){
            ctx.strokeText("Dum dum dum! The mouse is Dumb!", 250, 200)
        }
        else if(seconds > 32){
            ctx.strokeText("Ok, maybe that wasn't so nice", 250, 200)
        }
        else if(seconds > 18){
            ctx.strokeText("But I feel like in another life I could have been a lyricist", 250, 200)
        }
        else if(seconds > 14){
            ctx.strokeText("The mouse is runninggggg", 250, 200)
        }
        else if(seconds > 10 ){
            ctx.strokeText("But still he's losinggggg", 250, 200)
        }
        else if(seconds > 6 ){
            ctx.strokeText("And surely he'll reset backkkk", 250, 200)
        }
        else if(seconds > 2){
            ctx.strokeText("will he escape, who can telllllll?", 250, 200)
        }
        else if(seconds > 0){
            ctx.strokeText("Okay that was bad", 250, 200)
        }
    }else if(this.retry == 2){
        if(seconds > 45){
            ctx.strokeText("OH YES! This song is SO much better", 250, 200)
        }
        else if(seconds > 43){
            ctx.strokeText("Never gonna escape!", 250, 200)
        }
        else if(seconds > 41){
            ctx.strokeText("Never gonna eaaat the cheeeseeee", 250, 200)
        }
        else if(seconds > 39){
            ctx.strokeText("Always gonna run around", 250, 200)
        }
        else if(seconds > 36){
            ctx.strokeText("and looosee", 250, 200)
        }
        else if(seconds > 34){
            ctx.strokeText("We've known eachother", 250, 200)
        }
        else if(seconds > 27 ){
            ctx.strokeText("for one dayyyy", 250, 200)
        }
        else if(seconds > 20 ){
            ctx.strokeText("Okay even I am getting tired of this shtick", 250, 200)
        }
        else if(seconds > 15){
            ctx.strokeText("Please get out- It's my kids birthday", 250, 200)
        }
        else if(seconds > 10){
            ctx.strokeText("She's turning 11 today", 250, 200)
        }
        else if(seconds > 0){
            ctx.strokeText("You aren't gonna make it are you?", 250, 200)
        }

    }else if(this.retry == 3){
        // new Block(60, 20, 10, 520,"rgb(210,105,30)", false).draw(ctx)
       
        this.blockade.draw(ctx)
        this.blockade.collide(this.mouse, true);
        // this.drawBlock(60, 20, 10, 520, "rgb(210,105,30)", false)
        if(seconds > 50){
            ctx.strokeText("Ok kiddo, We need to talk", 250, 200)
        }
        else if(seconds > 45){
            ctx.strokeText("Do you WANT to stay here forever???", 250, 200)
        }
        else if(seconds > 40){
            ctx.strokeText("I really need to get home", 250, 200)
        }
        else if(seconds > 35){
            ctx.strokeText("You clearly need some help on this one", 250, 200)
        }
        else if(seconds > 30){
            ctx.strokeText("First you wanna hit the orange button", 250, 200)
            ctx.strokeText("^ Here", 770, 500)
        }
        else if(seconds > 26){
            ctx.strokeText("Actually DON'T - Just hit SHIFT", 250, 200)
            // ctx.strokeText("Yeah you didn't think of that did you?", 250, 250)
        }
        else if(seconds > 23){
            // ctx.strokeText("Actually DON'T - Just hit SHIFT", 250, 200)
            ctx.strokeText("Yeah you didn't think of that did you?", 250, 200)
        }
        else if(seconds > 20){
            ctx.strokeText("The last mouse did...", 250, 200)
            // ctx.strokeText("ahhh I wish she didn't blow up", 250, 250)
        }
        else if(seconds > 17){
            // ctx.strokeText("The last mouse did...", 250, 200)
            ctx.strokeText("ahhh I wish she didn't blow up", 250, 200)
        }
        else if(seconds > 14){
            ctx.strokeText("No - it's not cheating, I never said you could't do it", 250, 200)
            // ctx.strokeText("And for the record, you CAN complete the puzzle without using SHIFT", 250, 250)
        }
        else if(seconds > 6){
            ctx.font = "20px Arial";
            // ctx.strokeText("No - it's not cheating, I never said you could't do it", 250, 200)
            ctx.strokeText("And for the record, you CAN complete the puzzle without using SHIFT", 250, 250)
        }
        else if(seconds > 0){
            // ctx.font = "25px Arial";
            ctx.strokeText("Ok I am going to reset it now - please finish", 250, 200)
        }
       

    }else if(this.retry == 5){
        if(seconds > 50){
            ctx.strokeText("That... was not great  ", 250, 200)
        }
        else if(seconds > 45){
            ctx.strokeText("I don't think you are going to finish", 250, 200)
        }
        else if(seconds > 40){
            ctx.strokeText("It's passed 5 o'clock and my daughter is going to cry", 250, 200)
        }
        else if(seconds > 35){
            ctx.strokeText(" You like to see children cry. Is that it?", 250, 200)
        }
        else if(seconds > 30){
            ctx.strokeText("No I am not going to let you ruin my kids day", 250, 200)
        }
        else if(seconds > 20){
            this.blocks.forEach(function(block){
                    block.tile = true
                })
            ctx.strokeText("Ok now get out of here", 250, 250)
        }
        else if(seconds > 15){
            // ctx.strokeText("Actually DON'T - Just hit SHIFT", 250, 200)
            ctx.strokeText("Leave!!", 250, 200)
        }
        else if(seconds > 10){
            ctx.strokeText("Just go...", 250, 200)
            // ctx.strokeText("ahhh I wish she didn't blow up", 250, 250)
        }
        else if(seconds > 5){
            // ctx.strokeText("The last mouse did...", 250, 200)
            ctx.strokeText("FOR THE LOVE OF GOD LEAVE", 250, 200)
        }
        else if(seconds > 0){
            ctx.strokeText("Please........", 250, 200)
            // ctx.strokeText("And for the record, you CAN complete the puzzle without using SHIFT", 250, 250)
        }
    }
}

    Game.prototype.draw = function draw(ctx) {
        this.ctx = ctx
        const game = this
        // console.log("draw")
        
        
        // console.log(this.ctx)
        mouse = this.mouse
        ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.wins(ctx)
    if(!this.won){
        this.timer.draw(ctx)
        this.mazeStart(ctx)
        this.blocks.forEach(function(obj){
            obj.draw(ctx)
            obj.collide(mouse, true);
        }) 
        buttons.forEach(function(obj){
            obj.draw(ctx) 
        })
        this.mouse.draw(ctx, walls, this.blocks, buttons);

    }
 
    
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