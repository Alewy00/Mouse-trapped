function Block(width, height, x, y, color, tile) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.tile = tile;
}


Block.prototype.draw = function draw(ctx){
    // ctx = gameView.ctx;
    // console.log(this.height);
    // console.log("wall drew")
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}




Block.prototype.collideX = function collideX(mouse){
    const blockLeft = this.x 
    const widthLeft = this.x + this.width
    const avg = widthLeft + blockLeft
    const mouseSize = mouse.x + mouse.width
    // console.log(mouseSize)

    if ((!this.tile) && (mouseSize > blockLeft && mouseSize < widthLeft ))  {
        console.log("hit wall")
        if (mouseSize > avg) {
            mouse.resetRight()
        }else{
            mouse.resetLeft()
        }
    }
}
 


module.exports = Block;