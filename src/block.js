function Block(width, height, x, y, color, tile) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.tile = tile;
    this.lastX = true;
}


Block.prototype.draw = function draw(ctx){
    // ctx = gameView.ctx;
    // console.log(this.height);
    // console.log("wall drew")
  
    if (!this.tile){
        ctx.save();
        // ctx.translate(this.x, this.y);
        ctx.shadowBlur = 10;
        // ctx.shadowColor = this.color;
        ctx.shadowOffsetY=5;
        //  ctx.shadowOffsetX=5;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    };
    // ctx.shadowColor=this.color
    // ctx.shadowBlur=4;
    // ctx.shadowOffsetY=3;
    // stop the shadowing
    // ctx.shadowColor='rgba(0,0,0,0)';
}


Block.prototype.collide = function collide(mouse, boulder){
    const blockLeft = this.x  
    const width = this.x + this.width + 30
    const blockUp = this.y 
    const height = this.y + this.height + 30
    const avgY = ((height + blockUp) / 2)
    const avgX = ((width + blockLeft) / 2)
    const mouseSizeX = mouse.x + mouse.width - 5
    const mouseSizeY = mouse.y + mouse.height - 5
    if ( (!this.tile) && (mouseSizeX - 5  > blockLeft && mouseSizeX - 10 < width ) &&
    (mouseSizeY - 5 > blockUp && mouseSizeY  - 10 < height )) {
        if (this.lastX && boulder) {
            console.log("x first")
            this.collideX(mouse, mouseSizeX, avgX)
            this.collide(mouse)
        }else if(!this.lastX && boulder){
            console.log("y first")
            this.collideY(mouse, mouseSizeY, avgY)
            this.collide(mouse)
        }else{
            // console.log("true")
            return true;
        }
    }
    // console.log("false")
    return false;
}



    Block.prototype.collideX = function collideX(mouse, mouseSizeX, avgX){   
        if(mouseSizeX < avgX && mouse.speedY == 0 ){
            console.log("reset left")
            this.lastX = true 
            mouse.resetLeft()
            // mouse.speedX = -.5
            mouse.stop()
            // return true;
        }else if (mouseSizeX > avgX && mouse.speedY == 0  ){
            console.log("reset right")
            this.lastX = true 
            mouse.resetRight()
            // mouse.speedX = .5
            mouse.stop()
            // return true;
        }else{
            ("reset flag to false")
            this.lastX = false
        }
    }
    Block.prototype.collideY = function collideY(mouse, mouseSizeY, avgY){  
     if(mouseSizeY < avgY && mouse.speedX == 0 ){
        console.log("reset up")
        this.lastX = false 
        mouse.resetUp()    
        // mouse.speedY = -.5
        mouse.stop()
     }else if(mouseSizeY > avgY && mouse.speedX == 0 ) {
            console.log("reset down")
            this.lastX = false 
            mouse.resetDown()
            // mouse.speedY = .5
            mouse.stop()
        }else{
            console.log("reset flag ")
            this.lastX = true
        }
    }

    Block.prototype.collideCheese = function collideCheese(mouse){
        const blockLeft = this.x  
        const width = this.x + this.width + 30
        const blockUp = this.y 
        const height = this.y + this.height + 30
        const avgY = ((height + blockUp) / 2)
        const avgX = ((width + blockLeft) / 2)
        const mouseSizeX = mouse.x + mouse.width
        const mouseSizeY = mouse.y + mouse.height
        if ( (!this.tile) && (mouseSizeX  > blockLeft && mouseSizeX  < width ) &&
        (mouseSizeY > blockUp && mouseSizeY  < height )) {
            return true
        }else{
            return false
        }
    }
         
   






 


module.exports = Block;