function Button(w, h, x, y, block, color) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.block = block;
    this.color = color;
}

Button.prototype.draw = function draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}


Button.prototype.collideX = function collideX(mouse){
    const blockLeft = this.x 
    const widthLeft = this.x + this.width
    const blockUp = this.y 
    const widthUp = this.y + this.height
    const avg = widthLeft + blockLeft
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    // console.log(mouseSize)
    console.log(this.block.tile)
    console.log(blockUp)
    console.log(widthUp)
    console.log(mouseSizeY - 20)
    console.log(blockLeft)
    console.log(widthLeft)
    console.log(mouseSizeX)
    // console.log(mouseSize)
    if ((mouseSizeX -10  > blockLeft && mouseSizeX -10  < widthLeft ) &&
    (mouseSizeY -20 > blockUp && mouseSizeY - 20 < widthUp )) {
        console.log("button pressed")
           this.block.tile = !this.block.tile
       
    }
}

module.exports = Button;