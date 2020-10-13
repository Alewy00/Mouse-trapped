function Button(w, h, x, y, blocks, color) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.blocks = blocks;
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
    const color = this.color
    const widthUp = this.y + this.height
    const avg = widthLeft + blockLeft
    const mouseSizeX = mouse.x + mouse.width
    const mouseSizeY = mouse.y + mouse.height
    if ((mouseSizeX -10  > blockLeft && mouseSizeX -10  < widthLeft ) &&
    (mouseSizeY -20 > blockUp && mouseSizeY - 20 < widthUp )) {
        console.log("button pressed")
        blocks.forEach(function(block){
            console.log(color)
            console.log(block.color)
            if(block.color == color){
                console.log(block.tile)
                block.tile = !block.tile
            }
            // obj.collideX(mouse);
        })
       
    }
}

module.exports = Button;