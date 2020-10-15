

function Timer(x, y) {
    this.x = x
    this.y = y
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
    if(this.seconds < 5 && this.minutes < 1){
        ctx.strokeText("Hello there little one!", 260, 100)
    }else if(this.seconds < 15  && this.minutes < 1){
        ctx.strokeText("Welcome to Aperture Science Laboratories", 260, 100)
        ctx.strokeText("Where Buttons are your only friends", 260, 150)
    }
    else if(this.seconds < 25  && this.minutes < 1){
        ctx.strokeText("Use the W , A , S , and D keys to move around", 260, 100)
        // ctx.strokeText("You can throw the Cheese with the F button", 300, 150)
    }
    else if(this.seconds < 33  && this.minutes < 1){
        ctx.strokeText("You are currently stocked with infinite cheese", 260, 100)
        ctx.strokeText("You can throw the Cheese with the the ENTER button", 260, 150)
    }
    else if(this.seconds < 43 && this.minutes < 1){
        ctx.strokeText("Try throwing the cheese at a button", 260, 100)
        ctx.strokeText("Cheese cannot be thrown through walls", 260, 150)
    }
    else if(this.seconds < 60 && this.minutes < 1){
        ctx.font = "20px Arial";
        ctx.strokeText("Throwing cheese at a button will let you pass through that colored wall", 260, 100)
        ctx.strokeText("If you get trapped behind a wall you can press SHIFT to restart at the center", 260, 150)
        // ctx.font = "30px Arial";
    }
    else if(this.seconds < 10  && this.minutes < 2 ){
        ctx.strokeText("You may not eat the cheese", 260, 100)
    }
    else if(this.seconds < 20  && this.minutes < 2 ){
        ctx.font = "20px Arial";
        ctx.strokeText("We know it is infinite but the last mouse ate too much... ", 260, 150)
    }
    else if(this.seconds < 25  && this.minutes < 2 ){
        ctx.strokeText("Well lets not talk about the other subjects", 260, 150)
    } else if(this.seconds < 30  && this.minutes < 2 ){
        ctx.strokeText("erm I mean valued participants", 260, 150)
    }else if(this.seconds < 35 && this.minutes < 2 ){
        ctx.strokeText("anyways the exit is over here => ", 890, 560)
    }else if(this.seconds < 45 && this.minutes < 2 ){
        // ctx.strokeText("oops", 260, 150)

    }else if(this.seconds < 60 && this.minutes < 2 ){
    // ctx.strokeText("anyways the exit is over here => ", 890, 560)
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
    if(this.seconds >= 60){
        this.minutes += 1
        this.seconds = 0;
        if(this.minutes == 60){
            this.hours += 1
            this.minutes = 0
        }
    }
}

Timer.prototype.rules = function rules(ctx){
    setTimeout(function(){ 
        console.log("draw")
        // ctx.clearRect ( 0 , 0 , 500, 200 );
    }, 1000);
    setTimeout(function(){ 
        // ctx.clearRect ( 0 , 0 , 500, 200 );
        ctx.strokeText("Welcome my Lab Rat 2!", 500, 200)
    }, 10000);
}
module.exports = Timer;