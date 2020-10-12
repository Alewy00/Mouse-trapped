function Wall(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    // console.log("wall created")
}


Wall.prototype.draw = function draw(ctx){
    // ctx = gameView.ctx;
    // console.log(this.height);
    // console.log("wall drew")
    ctx.fillStyle = "rgb(50,205,50)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
}



module.exports = Wall;