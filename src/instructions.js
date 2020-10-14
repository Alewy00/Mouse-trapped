
function Instructions(x, y) {
    this.x = x
    this.y = y
    this.width = 100;
    this.height = 100;

   
}

Instructions.prototype.draw = function draw(ctx){
    ctx.fillStyle = "red";
    console.log(ctx)
    ctx.strokeText("Welcome my Lab Rat!", 500, 800)
    ctx.font = "30px Arial";
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    setTimeout(function(){ 
        console.log("draw")
        // ctx.clearRect ( 0 , 0 , 500, 200 );
        ctx.strokeText("Welcome my Lab Rat!", 500, 300)
    }, 1000);
    setTimeout(function(){ 
        // ctx.clearRect ( 0 , 0 , 500, 200 );
        ctx.strokeText("Welcome my Lab Rat 2!", 500, 200)
    }, 10000);

}

module.exports = Instructions;