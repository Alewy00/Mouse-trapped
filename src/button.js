const sound = require("./sound");
const Game = require("./game")
function Button(game, w, h, x, y, blocks, color, playing = false) {
    this.game = game;
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.blocks = blocks;
    this.color = color;
    mySound = new sound('src/audio/timer.mp3');
    countdown = new sound("src/audio/FinalCountDownTrimmed.mp3")
    buzzer = new sound("src/audio/buzzer.mp3")
    click = new sound("src/audio/button.mp3")
    this.countdownPlaying =  playing
    this.timer.bind(this);
    reset = false
    exit = ""
    entrance = ""
}

Button.prototype.draw = function draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    
}

Button.prototype.timer = function timer(block){
    mySound.play();
    setTimeout(function(){ 
        block.tile = !block.tile 
      
    }, 10000);
}

Button.prototype.drawMaze = function drawMaze(w,h,x,y, color, tile){
    // this.game.drawBlock(w, h, x, y, color, tile)
}
Button.prototype.maze = function maze(block, played){
    // myAudio.duration > 0 && !myAudio.paused

    
    if (!this.game.playing){
        if(!reset){
        game = this.game;
        this.game.playing = true
        countdown.play();
        this.game.drawBlock(200, 20, 360, 490, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(400, 20, 260, 400, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(20, 100, 550, 490, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(200, 20, 550, 570, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(20, 100, 650, 400, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(20, 190, 730, 400, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(200, 20, 730, 400, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(20, 120, 910, 400, "rgba(245, 229, 27, 1)", false)
        this.game.drawBlock(20, 60, 260, 340, "rgba(245, 229, 27, 1)", false)
        // bottom yellow button
        this.game.drawButton(35, 35, 1150 ,200, this.game.blocks,"rgba(245, 229, 27, 1)")
        // bottom orange button
        this.game.drawButton(35, 35, 760 ,430, this.game.blocks,"rgba(248, 148, 6, 1)")
        // bottom purple button
        this.game.drawButton(35, 35, 290 ,550, this.game.blocks,"rgba(140, 20, 252, 1)", true)
        // bottom pink
        this.game.drawBlock(20, 100, 260, 490, "rgb(255,20,147)", false)
        this.game.drawBlock(20, 100, 340, 490, "rgb(255,20,147)", false)
        this.game.drawBlock(100, 20, 260, 490, "rgb(255,20,147)", false)
        // right purple
         entrance = this.game.drawBlock(20, 250, 1000, 340, "rgba(140, 20, 252, 1)", false)
         exit = this.game.drawBlock(190, 20, 1000, 340, "rgba(140, 20, 252, 1)", false)
        reset = true;
        }else{
            this.game.playing = true
            countdown.play();
        }
        game.blocks.forEach(function(block){
            if(block.color != "rgba(140, 20, 252, 1)"){
                block.tile = false
                // purps.tile = true
                // purps2.tile = true
            }
        })
        setTimeout(function(){  
            button.game.playing = false
            game.blocks.forEach(function(block){
                if(block.color != "rgba(140, 20, 252, 1)"){
                    block.tile = false
                    exit.tile = false
                    entrance.tile = true
                }
                
            })
            console.log("reset mouse")
            this.game.mouse.x = 100;
            this.game.mouse.y = 500;
            buzzer.play()
        }, 54000)
    }
}


// Button.prototype.resetMaze = function resetMaze(){
//     if (!this.game.playing){
//         game = this.game;
//         this.game.playing = true
//         countdown.play();
//     setTimeout(function(){  
//         button.game.playing = false
//         game.blocks.forEach(function(block){
//             if(block.color == "rgb(255,20,147)" || block.color =="rgb(248,0,0)" || block.color == "rgba(140, 20, 252, 1)" || block.color == "rgb(255,20,147)" ||block.color == "rgba(248, 148, 6, 1)" || block.color == "rgba(245, 229, 27, 1)" ||block.color == "rgba(0, 181, 204, 1)"){
//                 block.tile = false
//                 purps.tile = true
//                 purps2.tile = true
//             }
            
//         })
//         console.log("reset mouse")
//         this.game.mouse.x = 100;
//         this.game.mouse.y = 500;
//         buzzer.play()
//     }, 54000)
// }
// }

Button.prototype.collideX = function collideX(mouse){
    // console.log(mouse)
    button = this;
    const blockLeft = this.x 
    const widthLeft = this.x + this.width
    const blockUp = this.y 
    const color = this.color
    const widthUp = this.y + this.height
    const avg = widthLeft + blockLeft
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    // console.log(mouseSizeX)

    // console.log(mouseSizeY)
    if ((mouseSizeX - 10  > blockLeft && mouseSizeX -10  < widthLeft ) &&
    (mouseSizeY + 20 > blockUp && mouseSizeY - 20 < widthUp )) {
        console.log("button pressed")
        this.blocks.forEach(function(block){
            // console.log(color)
            console.log(block.color)
            if(block.color == this.color){
                click.play()
                block.tile = !block.tile
                if(block.color == "rgb(50,205,50)" ){
                    button.timer(block);
                }
                if(block.color == "rgba(140, 20, 252, 1)"){
                    button.maze(block);
                }
            }
            // obj.collideX(mouse);
        })
       return true
    }else{
        // console.log("return false")
        return false
    }
}

Button.prototype.collideCheese = function collideCheese(mouse){
    button = this;
    const blockLeft = this.x  
    const width = this.x + this.width + 30
    const blockUp = this.y 
    const height = this.y + this.height + 30
    const avgY = ((height + blockUp) / 2)
    const avgX = ((width + blockLeft) / 2)
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    if ( (mouseSizeX  > blockLeft && mouseSizeX  < width ) &&
    (mouseSizeY > blockUp && mouseSizeY  < height )) {
        this.blocks.forEach(function(block){
            // console.log("button is" + button.color)
            // console.log(block.color)
            if(block.color == button.color){
                click.play()
                console.log(block)
                // console.log(block.tile)
                block.tile = !block.tile
                if(block.color == "rgb(50,205,50)" ){
                    button.timer(block);
                }
                if(block.color == "rgba(140, 20, 252, 1)"){
                    button.maze(block);
                }
            }
            // obj.collideX(mouse);
        })
       return true
    }else{
        // console.log("return false")
        return false
    }
}
     




module.exports = Button;