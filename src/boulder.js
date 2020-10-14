const game = require("./game");
const sound = require("./sound");
function Boulder(x, y, dir) {
    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.dir = dir;
    splat = new sound("src/audio/splat.mp3")
    // this.collide.bind(this)
}

Boulder.prototype.move = function move(dir) {
    this.x += (dir[0] * 4)
    this.y += (dir[1] * 4)
};


Boulder.prototype.draw = function draw(ctx){
    this.move(this.dir);
    // this.collide(blocks)
    // ctx.fillStyle = "rgb(0,0,0)";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.image = new Image();
    this.image.src = 'src/images/cheese3.png';
    ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
}

Boulder.prototype.collide = function collide(blocks){
    const boulder = this;
    let flag = false
    blocks.forEach(function(block){
        // console.log(boulder)
        if(block.collideCheese(boulder)){
            // console.log("return true")
            flag = true
            splat.play()

        }
    })
    return flag;    
}

Boulder.prototype.collideButton = function collideButton(buttons){
    const boulder = this;
    let flag = false
    buttons.forEach(function(button){
        // console.log(button)
        if(button.collideCheese(boulder)){
            // console.log("return true")
            flag = true
        }
    })
    return flag;    
}

module.exports = Boulder;

