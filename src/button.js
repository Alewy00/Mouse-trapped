const sound = require("./sound");

function Button(w, h, x, y, blocks, color) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.blocks = blocks;
    this.color = color;
    mySound = new sound('../dist/audio/timer.mp3');
    this.timer.bind(this);
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
    console.log(mouseSizeX)
    console.log(blockLeft)
    // console.log(mouseSizeX)

    // console.log(mouseSizeY)
    if ((mouseSizeX - 10  > blockLeft && mouseSizeX -10  < widthLeft ) &&
    (mouseSizeY + 20 > blockUp && mouseSizeY - 20 < widthUp )) {
        console.log("button pressed")
        blocks.forEach(function(block){
            console.log(color)
            console.log(block.color)
            if(block.color == color){
                console.log(block.tile)
                block.tile = !block.tile
                if(block.color == "rgb(50,205,50)"){
                    button.timer(block);
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