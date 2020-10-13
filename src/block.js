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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}


Block.prototype.collide = function collide(mouse){
    let flagX = false;
    let flagY = false;
    const blockLeft = this.x  
    const width = this.x + this.width + 30
    const blockUp = this.y 
    const height = this.y + this.height + 30
    const avgY = ((height + blockUp) / 2)
    const avgX = ((width + blockLeft) / 2)
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    if ( (!this.tile) && (mouseSizeX  > blockLeft && mouseSizeX  < width ) &&
    (mouseSizeY  > blockUp && mouseSizeY < height )) {
        if (this.lastX) {
            console.log("x first")
            this.collideX(mouse, mouseSizeX, avgX)
            this.collide(mouse)
        }else{
            console.log("y first")
            this.collideY(mouse, mouseSizeY, avgY)
            this.collide(mouse)
        }
    }
}

    Block.prototype.collideX = function collideX(mouse, mouseSizeX, avgX){   
        if(mouseSizeX <= avgX && mouse.speedY == 0 ){
            console.log("reset left")
            this.lastX = true 
            mouse.resetLeft()
            // return null;
        }else if (mouseSizeX > avgX ){
            console.log("reset right")
            this.lastX = true 
            mouse.resetRight()
            // return null;
        }else{
            ("reset flag to false")
            this.lastX = false
        }
    }
    Block.prototype.collideY = function collideY(mouse, mouseSizeY, avgY){  
        if(mouseSizeY > avgY && mouse.speedX == 0 ) {
            console.log("reset down")
            this.lastX = false 
            mouse.resetDown()
            // mouse.resetDown()
            // mouse.resetRight()
        }else if(mouseSizeY <= avgY && mouse.speedX == 0 ){
            console.log("reset up")
            this.lastX = false 
            mouse.resetUp()    
        }else{
            console.log("reset flag ")
            this.lastX = true
        }
    }
         
   





// Block.prototype.collideX = function collideX(mouse){
//     const blockLeft = this.x 
//     const widthLeft = this.x + this.width
//     const avg = widthLeft + blockLeft
//     const mouseSize = mouse.x + mouse.width
//     // console.log(mouseSize)

//     if ((!this.tile) && (mouseSize > blockLeft && mouseSize < widthLeft ))  {
//         console.log("hit wall")
//         if (mouseSize > avg) {
//             mouse.resetRight()
//         }else{
//             mouse.resetLeft()
//         }
//     }
// }

// Block.prototype.collideX = function collideX(mouse){
//     const blockUp = this.y
//     const heightUp = this.y + this.height
//     const avg = heightUp + blockUp
//     const mouseSize = mouse.y + mouse.height
//     console.log("Blockup is" + blockUp)
//     console.log("mouse is " + mouseSize)
//     console.log("height is" + heightUp)

//     if ((!this.tile) && (mouseSize < blockUp && mouseSize > heightUp ))  {
//         // console.log("hit upwall")
//         if (mouseSize > avg) {
//             mouse.resetDown()
//         }else{
//             mouse.resetUp()
//         }
//     }
// }
 


module.exports = Block;