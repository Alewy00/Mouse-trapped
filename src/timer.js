

function Timer(x, y, game) {
    this.x = x
    this.y = y
    this.game = game
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.width = 100;
    this.height = 100;
    first = true

   
}



Timer.prototype.draw = function draw(ctx){
    // ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    this.change()
    if(this.game.start){
    // console.log(this.seconds)
    if(this.seconds < 5 && this.minutes < 1){
        ctx.strokeText("Hello there little one!", 260, 100)
    }else if(this.seconds < 10  && this.minutes < 1){
        ctx.strokeText("Welcome to Aperture Science Laboratories", 260, 100)
        ctx.strokeText("Where Buttons are your only friends", 260, 150)
    }
    else if(this.seconds < 16  && this.minutes < 1){
        ctx.strokeText("Use the W , A , S , and D keys to move around", 260, 100)
        // ctx.strokeText("You can throw the Cheese with the F button", 300, 150)
    }
    else if(this.seconds < 23 && this.minutes < 1){
        ctx.strokeText("You are currently stocked with infinite cheese", 260, 100)
        ctx.strokeText("You can throw the Cheese with the the ENTER button", 260, 150)
    }
    else if(this.seconds < 30 && this.minutes < 1){
        ctx.strokeText("Try throwing the cheese at a button", 260, 100)
        ctx.strokeText("Cheese cannot be thrown through walls", 260, 150)
    }
    else if(this.seconds < 40 && this.minutes < 1){
        ctx.font = "20px Arial";
        ctx.strokeText("Throwing cheese at a button will let you pass through that colored wall", 250, 100)
        ctx.strokeText("You can press SHIFT to restart at the center", 250, 150)
        // ctx.font = "30px Arial";
    }
    else if(this.seconds < 47 && this.minutes < 1){
        ctx.strokeText("The Green Button is on a 10 second timer", 260, 100)
        ctx.strokeText("All of other buttons are permanent", 260, 150)
    }
    else if(this.seconds < 54 && this.minutes < 1 ){
        ctx.strokeText("You may not eat the cheese", 260, 100)
    }
    else if(this.seconds < 60  && this.minutes < 1 ){
        ctx.font = "20px Arial";
        ctx.strokeText("We know it is infinite but the last mouse ate too much... ", 260, 150)
    }
    else if(this.seconds < 6  && this.minutes < 2 ){
        ctx.strokeText("Well lets not talk about the other subjects", 260, 150)
    } else if(this.seconds < 10  && this.minutes < 2 ){
        ctx.strokeText("erm I mean valued participants", 260, 150)
    }else if(this.seconds < 20 && this.minutes < 2 ){
        ctx.strokeText("anyways the exit is over here => ", 890, 560)
    }
}

    if(this.minutes < 10 && this.seconds >= 10){
        ctx.strokeText("0" + this.hours + ":0"+ this.minutes + ":" + this.seconds, 500, 300)
    }else if(this.minutes >= 10 && this.seconds < 10){
        ctx.strokeText( "0" + this.hours + ":"+ this.minutes + ":0" + this.seconds, 500, 300)
    }else if(this.minutes < 10 && this.seconds < 10){
        ctx.strokeText("0" + this.hours + ":0"+ this.minutes + ":0" + this.seconds, 500, 300)
    }else{
        ctx.strokeText("0" + this.hours + ":"+ this.minutes + ":" + this.seconds, 500, 300);
    }
}

Timer.prototype.change = function change(){
    // console.log("change")
    if(this.seconds >= 60){
        this.minutes += 1
        this.seconds = 0;
        if(this.minutes == 60){
            this.hours += 1
            this.minutes = 0
        }
    }
}


module.exports = Timer;