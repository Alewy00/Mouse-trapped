!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=3)}([function(t,e,s){s(1);var i=s(5),o=s(7),r=s(8),h=s(9),n=s(10);function a(){ctx="",this.blockade=new r(20,270,220,340,"rgb(210,105,30)",!1),this.won=!1,this.start=!0,this.retry=0,this.mouse=new i(510,200),this.timer=new n(400,200,this),walls=[],this.seconds=54,this.blocks=[],buttons=[],this.bottom=!1,this.playing=!1,first_time=!0,this.maze="",this.drawBlock(10,600,0,0,"rgb(210,105,30)",!1),this.drawBlock(10,500,1190,0,"rgb(210,105,30)",!1),walls.push(this.drawBlock(1200,10,0,0,"rgb(210,105,30)",!1)),walls.push(this.drawBlock(1200,10,0,590,"rgb(210,105,30)",!1)),this.drawBlock(20,300,900,10,"rgba(0, 181, 204, 1)",!1),this.drawBlock(290,20,900,300,"rgba(0, 181, 204, 1)",!1),this.drawButton(35,35,700,20,this.blocks,"rgb(50,205,50)"),this.drawButton(35,35,20,90,this.blocks,"rgb(50,205,50)"),this.drawBlock(20,300,200,10,"rgb(50,205,50)",!1),this.drawBlock(210,20,10,298,"rgb(50,205,50)",!1),this.drawBlock(20,280,920,10,"rgb(50,205,50)",!1),this.drawBlock(270,20,920,280,"rgb(50,205,50)",!1),this.drawButton(35,35,20,20,this.blocks,"rgba(0, 181, 204, 1)"),this.drawBlock(20,238,180,60,"rgb(248,0,0)",!1),this.drawBlock(190,20,10,60,"rgb(248,0,0)",!1),this.drawBlock(190,21,10,277,"rgb(248,0,0)",!1),this.drawButton(35,35,1150,150,this.blocks,"rgb(248,0,0)"),this.drawButton(35,35,20,200,this.blocks,"rgba(245, 229, 27, 1)"),this.drawBlock(70,20,1120,110,"rgba(245, 229, 27, 1)",!1),this.drawBlock(70,20,1120,20,"rgba(245, 229, 27, 1)",!1),this.drawBlock(20,110,1120,20,"rgba(245, 229, 27, 1)",!1),this.drawBlock(20,265,220,60,"rgb(255,20,147)",!1),this.drawBlock(230,20,10,320,"rgb(255,20,147)",!1),this.drawButton(35,35,1150,60,this.blocks,"rgb(255,20,147)"),this.drawBlock(950,20,240,320,"rgba(248, 148, 6, 1)",!1),this.maze=this.drawBlock(20,250,240,340,"rgba(140, 20, 252, 1)",!1),this.drawButton(35,35,15,550,this.blocks,"rgba(140, 20, 252, 1)")}a.prototype.wins=function(t){if(timer=this.timer,this.mouse.x>1160)this.won=!0,this.mouse.x=20,this.mouse.y=520;else if(this.won){if(this.mouse.x<0)return this.mouse.x=500,this.mouse.y=200,this.won=!1,location.reload(),null;this.mouse.draw(t,walls,this.blocks,buttons),this.rankings(t,timer.minutes,timer.seconds),walls.push(this.drawBlock(10,500,0,0,"rgb(210,105,30)",!1)),walls.push(this.drawBlock(10,600,1190,0,"rgb(210,105,30)",!1)),walls.forEach((function(e){e.draw(t),e.collide(this.mouse,!0)})),t.font="80px Arial",t.fillStyle="rgba(0, 181, 204, 1)",t.strokeStyle="rgb(50,205,50)",t.fillText("You win!!",100,100),t.strokeText("You win!!",100,100),t.font="30px Arial",t.fillText("<= Try again",80,550),t.strokeText("<= Try again",80,550),t.font="80px Arial",t.strokeStyle="rgba(0, 181, 204, 1)",t.fillStyle="rgb(50,205,50)",timer.minutes<10&&timer.seconds>=10?(t.strokeText("Your Time: 0"+timer.hours+":0"+timer.minutes+":"+timer.seconds,460,100),t.fillText("Your Time: 0"+timer.hours+":0"+timer.minutes+":"+timer.seconds,460,100)):timer.minutes>=10&&timer.seconds<10?(t.fillText("Your Time: 0"+timer.hours+":"+timer.minutes+":0"+timer.seconds,460,100),t.strokeText("Your Time: 0"+timer.hours+":"+timer.minutes+":0"+timer.seconds,460,100)):timer.minutes<10&&timer.seconds<10?(t.fillText("Your Time: 0"+timer.hours+":0"+timer.minutes+":0"+timer.seconds,460,100),t.strokeText("Your Time: 0"+timer.hours+":0"+timer.minutes+":0"+timer.seconds,460,100)):(t.fillText("Your Time: 0"+timer.hours+":0"+timer.minutes+":0"+timer.seconds,450,100),t.strokeText("Your Time: 0"+timer.hours+":0"+timer.minutes+":0"+timer.seconds,450,100))}},a.prototype.rankings=function(t,e,s){t.font="60px Arial",t.strokeStyle="rgba(245, 229, 27, 1)",t.fillStyle="rgba(248, 148, 6, 1)",e<1?(t.strokeText("Ranking: Julius Cheeser!",100,300),t.fillText("Ranking: Julius Cheeser!",100,300),t.strokeText("Next Rank: Highest Rank already!",100,400),t.fillText("Next Rank: Highest Rank already!",100,400)):e<2&&s<=30?(t.strokeText("Ranking: Mouseketeer!",100,300),t.fillText("Ranking: Mouseketeer!",100,300),t.strokeText("Next Rank: 00:01:00",100,400),t.fillText("Next Rank: 00:01:00",100,400)):e<2?(t.strokeText("Ranking: Mouserella! ",100,300),t.fillText("Ranking: Mouserella! ",100,300),t.strokeText("Next Rank: 00:01:30",100,400),t.fillText("Next Rank: 00:01:30",100,400)):e<3?(t.strokeText("Ranking: Mr Mice guy! ",100,300),t.fillText("Ranking: Mr Mice guy! ",100,300),t.strokeText("Next Rank: 00:01:59",100,400),t.fillText("Next Rank: 00:01:59",100,400)):e<7?(t.strokeText("Ranking: Anonymouse! ",100,300),t.fillText("Ranking: Anonymouse! ",100,300),t.strokeText("Next Rank: 00:03:00",100,400),t.fillText("Next Rank: 00:03:00",100,400)):(t.strokeText("Ranking: Ruiner of birthdays! ",100,300),t.fillText("Ranking: Ruiner of birthdays!",100,300),t.strokeText("Next Rank: 00:07:00",100,400),t.fillText("Next Rank: 00:07:00",100,400))},a.BG_COLOR="#D3D3D3",a.WIDTH=1200,a.HEIGHT=600,a.prototype.drawWall=function(t,e,s,i){var r=new o(t,e,s,i);walls.push(r)},a.prototype.drawButton=function(t,e,s,i,o,r){var n=new h(this,t,e,s,i,o,r);buttons.push(n)},a.prototype.drawBlock=function(t,e,s,i,o,h){var n=new r(t,e,s,i,o,h);return this.blocks.push(n),n},a.prototype.mazeStart=function(t){context=t,game=this,this.mouse.y>290&&!this.bottom&&this.start&&(setTimeout((function(){game.bottom=!0}),5e3),t.font="40px Arial",t.strokeText("You thought that was easy?",300,400),t.strokeText("I'll make it a bit harder",300,500)),this.playing?this.drawCount(t,this.seconds):this.playing||(this.seconds=54)},a.prototype.drawCount=function(t,e){t.font="110px Arial",t.strokeText(e,480,150),t.font="25px Arial",0==this.retry?e>48?t.strokeText("If you can't make it in time the timer will reset you",250,200):e>42?t.strokeText("Difficult enough?",250,200):e>35?t.strokeText("Oh come on I thought mice were supposed to be smart",250,200):e>25?t.strokeText("ohhh I love watching them run",250,200):e>18?t.strokeText("Halfway done! Man I love this song",250,200):e>14?t.strokeText("We're leaving togetherrrrrrrr,",250,200):e>10?t.strokeText("But still it's fareeewellll",250,200):e>6?t.strokeText("And maybe we'll come backkkk",250,200):e>2?t.strokeText("To earth, who can tellllll?",250,200):e>0&&t.strokeText("Times up!! MWAhahahaha",250,200):1==this.retry?e>48?t.strokeText("I knew you wouldn't make it",250,200):e>42?t.strokeText("The last mouse was so much smarter",250,200):e>37?t.strokeText("Dum dum dum! The mouse is Dumb!",250,200):e>32?t.strokeText("Ok, maybe that wasn't so nice",250,200):e>18?t.strokeText("But I feel like in another life I could have been a lyricist",250,200):e>14?t.strokeText("The mouse is runninggggg",250,200):e>10?t.strokeText("But still he's losinggggg",250,200):e>6?t.strokeText("And surely he'll reset backkkk",250,200):e>2?t.strokeText("will he escape, who can telllllll?",250,200):e>0&&t.strokeText("Okay that was bad",250,200):2==this.retry?e>45?t.strokeText("OH YES! This song is SO much better",250,200):e>43?t.strokeText("Never gonna escape!",250,200):e>41?t.strokeText("Never gonna eaaat the cheeeseeee",250,200):e>39?t.strokeText("Always gonna run around",250,200):e>36?t.strokeText("and looosee",250,200):e>34?t.strokeText("We've known eachother",250,200):e>27?t.strokeText("for one dayyyy",250,200):e>20?t.strokeText("Okay even I am getting tired of this shtick",250,200):e>15?t.strokeText("Please get out- It's my kids birthday",250,200):e>10?t.strokeText("She's turning 11 today",250,200):e>0&&t.strokeText("You aren't gonna make it are you?",250,200):3==this.retry?(this.blockade.draw(t),this.blockade.collide(this.mouse,!0),e>50?t.strokeText("Ok kiddo, We need to talk",250,200):e>45?t.strokeText("Do you WANT to stay here forever???",250,200):e>40?t.strokeText("I really need to get home",250,200):e>35?t.strokeText("You clearly need some help on this one",250,200):e>30?(t.strokeText("First you wanna hit the orange button",250,200),t.strokeText("^ Here",770,500)):e>26?t.strokeText("Actually DON'T - Just hit SHIFT",250,200):e>23?t.strokeText("Yeah you didn't think of that did you?",250,200):e>20?t.strokeText("The last mouse did...",250,200):e>17?t.strokeText("ahhh I wish she didn't blow up",250,200):e>14?t.strokeText("No - it's not cheating, I never said you could't do it",250,200):e>6?(t.font="20px Arial",t.strokeText("And for the record, you CAN complete the puzzle without using SHIFT",250,250)):e>0&&t.strokeText("Ok I am going to reset it now - please finish",250,200)):5==this.retry&&(e>50?t.strokeText("That... was not great  ",250,200):e>45?t.strokeText("I don't think you are going to finish",250,200):e>40?t.strokeText("It's passed 5 o'clock and my daughter is going to cry",250,200):e>35?t.strokeText(" You like to see children cry. Is that it?",250,200):e>30?t.strokeText("No I am not going to let you ruin my kids day",250,200):e>20?(this.blocks.forEach((function(t){t.tile=!0})),t.strokeText("Ok now get out of here",250,250)):e>15?t.strokeText("Leave!!",250,200):e>10?t.strokeText("Just go...",250,200):e>5?t.strokeText("FOR THE LOVE OF GOD LEAVE",250,200):e>0&&t.strokeText("Please........",250,200))},a.prototype.draw=function(t){this.ctx=t;mouse=this.mouse,t.clearRect(0,0,a.WIDTH,a.HEIGHT),t.fillStyle=a.BG_COLOR,t.fillRect(0,0,a.WIDTH,a.HEIGHT),this.wins(t),this.won||(this.timer.draw(t),this.mazeStart(t),this.blocks.forEach((function(e){e.draw(t),e.collide(mouse,!0)})),buttons.forEach((function(e){e.draw(t)})),this.mouse.draw(t,walls,this.blocks,buttons))},a.prototype.isOutOfBounds=function(t){t[0]<0&&this.mouse.reset(1,t[1]),t[1]<0&&this.mouse.reset(t[0],0),t[0]>a.WIDTH&&this.mouse.reset(a.WIDTH-1,t[1]),t[1]>a.HEIGHT&&this.mouse.reset(t[0],a.HEIGHT-1)},t.exports=a},function(t,e,s){s(0),s(4);function i(t,e,s){this.game=t,this.ctx=e,this.mouse=s,i.key=!1,this.start.bind(this),this.down=!0,this.timer=t.timer,this.interval=0}i.MOVES={w:[0,-1],a:[-1,0],s:[0,1],d:[1,0]},i.prototype.startTime=function(){this.interval=setInterval((function(){this.timer.seconds+=1}),1e3)},i.prototype.start=function(){game=this.game,this.startTime(),gameview=this,window.addEventListener("keydown",(function(t){this.down&&(i.key=t.key),this.down=!1})),window.addEventListener("keyup",(function(t){i.key=!1,mouse.stop(),this.down=!0})),requestAnimationFrame(this.animate.bind(this))},i.prototype.restart=function(){},i.prototype.timer=function(){game.timer.seconds+=1},i.prototype.animate=function(t){this.game.won&&clearInterval(this.interval),i.key&&"Tab"==i.key&&(mouse.x=450,mouse.y=200,i.key=!1),i.key&&"s"==i.key&&(mouse.speedY=3,mouse.dir=[0,1],i.key=!1),i.key&&"w"==i.key&&(i.key=!1,mouse.dir=[0,-1],mouse.speedY=-3),i.key&&"a"==i.key&&(i.key=!1,mouse.dir=[-1,0],mouse.speedX=-3),i.key&&"d"==i.key&&(i.key=!1,mouse.dir=[1,0],mouse.speedX=3),i.key&&"Enter"==i.key&&(mouse.throwBoulder(),i.key=!1),this.game.draw(this.ctx),requestAnimationFrame(this.animate.bind(this))},t.exports=i},function(t,e){t.exports=function(t){this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",this.sound.volume=.1,document.body.appendChild(this.sound),this.play=function(){this.sound.play()},this.stop=function(){this.sound.pause()}}},function(t,e,s){"use strict";s.r(e);s(11);var i=s(0),o=s(1);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementsByTagName("canvas")[0];t.width=i.WIDTH,t.height=i.HEIGHT,t.style="border:1px solid #000000;";var e=t.getContext("2d"),s=new i(e);new o(s,e,s.mouse).start()}))},function(t,e){},function(t,e,s){s(0);var i=s(6);s(1),s(1);function o(t,e){this.width=50,this.height=50,this.x=t,this.y=e,this.speedX=0,this.speedY=0,this.dir=[0,-1],this.boulder=null}o.prototype.draw=function(t,e,s,i){this.move(),this.boulder&&(this.boulder.collide(s)||this.boulder.collideButton(i)?this.boulder=null:this.boulder.draw(t)),-1==this.dir[0]?(this.image=new Image,this.image.src="src/images/mouseLeft.png",t.drawImage(this.image,this.x,this.y,this.width,this.height)):1==this.dir[0]?(this.image=new Image,this.image.src="src/images/mouse.png",t.drawImage(this.image,this.x,this.y,this.width,this.height)):-1==this.dir[1]?(this.image=new Image,this.image.src="src/images/mouseback.png",t.drawImage(this.image,this.x,this.y,this.width,this.height)):1==this.dir[1]&&(this.image=new Image,this.image.src="src/images/mousefront.png",t.drawImage(this.image,this.x,this.y,this.width,this.height))},o.prototype.throwBoulder=function(){this.boulder=new i(this.x+10,this.y+5,this.dir)},o.prototype.move=function(){this.x+=this.speedX,this.y+=this.speedY},o.prototype.stop=function(){this.speedX=0,this.speedY=0},o.prototype.reset=function(t,e){this.x=t,this.y=e},o.prototype.resetLeft=function(){this.x-=7,this.y=this.y},o.prototype.resetUp=function(){this.x=this.x,this.y-=7},o.prototype.resetDown=function(){this.x=this.x,this.y+=7},o.prototype.resetRight=function(){this.x+=7,this.y=this.y},t.exports=o},function(t,e,s){s(0);var i=s(2);function o(t,e,s){this.width=30,this.height=30,this.x=t,this.y=e,this.dir=s,splat=new i("src/audio/splat.mp3")}o.prototype.move=function(t){this.x+=4*t[0],this.y+=4*t[1]},o.prototype.draw=function(t){this.move(this.dir),this.image=new Image,this.image.src="src/images/cheese3.png",t.drawImage(this.image,this.x,this.y,this.width,this.height)},o.prototype.collide=function(t){var e=this,s=!1;return t.forEach((function(t){t.collideCheese(e)&&(s=!0,splat.play())})),s},o.prototype.collideButton=function(t){var e=this,s=!1;return t.forEach((function(t){t.collideCheese(e)&&(s=!0)})),s},t.exports=o},function(t,e){function s(t,e,s,i){this.width=t,this.height=e,this.x=s,this.y=i}s.prototype.draw=function(t){t.fillStyle="rgb(210,105,30)",t.fillRect(this.x,this.y,this.width,this.height)},t.exports=s},function(t,e){function s(t,e,s,i,o,r){this.width=t,this.height=e,this.x=s,this.y=i,this.color=o,this.tile=r,this.lastX=!0}s.prototype.draw=function(t){this.tile?(t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height)):(t.save(),t.shadowBlur=10,t.shadowOffsetY=5,t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height),t.strokeRect(this.x,this.y,this.width,this.height),t.restore())},s.prototype.collide=function(t,e){var s=this.x,i=this.x+this.width+30,o=this.y,r=this.y+this.height+30,h=(r+o)/2,n=(i+s)/2,a=t.x+t.width-5,l=t.y+t.height-5;if(!this.tile&&a-5>s&&a-10<i&&l-5>o&&l-10<r)if(this.lastX&&e)this.collideX(t,a,n),this.collide(t);else{if(this.lastX||!e)return!0;this.collideY(t,l,h),this.collide(t)}return!1},s.prototype.collideX=function(t,e,s){e<s&&0==t.speedY?(this.lastX=!0,t.resetLeft(),t.stop()):e>s&&0==t.speedY?(this.lastX=!0,t.resetRight(),t.stop()):this.lastX=!1},s.prototype.collideY=function(t,e,s){e<s&&0==t.speedX?(this.lastX=!1,t.resetUp(),t.stop()):e>s&&0==t.speedX?(this.lastX=!1,t.resetDown(),t.stop()):this.lastX=!0},s.prototype.collideCheese=function(t){var e=this.x,s=this.x+this.width+30,i=this.y,o=this.y+this.height+30,r=t.x+t.width,h=t.y+t.height;return!this.tile&&r>e&&r<s&&h>i&&h<o},t.exports=s},function(t,e,s){var i=s(2);s(0);function o(t,e,s,o,r,h,n){var a=arguments.length>7&&void 0!==arguments[7]&&arguments[7];this.game=t,this.width=e,this.height=s,this.x=o,this.y=r,this.blocks=h,this.color=n,mySound=new i("src/audio/timer.mp3"),countdown=new i("src/audio/FinalCountDownTrimmed.mp3"),buzzer=new i("src/audio/buzzer.mp3"),click=new i("src/audio/button.mp3"),RickRoll=new i("src/audio/RickRoll.mp3"),this.countdownPlaying=a,this.timer.bind(this),reset=!1,exit="",entrance=""}o.prototype.draw=function(t){t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height),t.strokeRect(this.x,this.y,this.width,this.height)},o.prototype.timer=function(t){mySound.play(),setTimeout((function(){t.tile=!1}),1e4)},o.prototype.maze=function(t,e){this.game.playing||(reset?(this.game.playing=!0,1==this.game.retry?countdown.play():RickRoll.play()):(this.game.start=!1,game=this.game,this.game.playing=!0,countdown.play(),this.game.drawBlock(200,20,360,490,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(400,20,260,400,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(20,100,550,490,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(200,20,550,570,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(20,100,650,400,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(20,190,730,400,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(200,20,730,400,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(20,120,910,400,"rgba(245, 229, 27, 1)",!1),this.game.drawBlock(20,60,260,340,"rgba(245, 229, 27, 1)",!1),this.game.drawButton(35,35,760,430,this.game.blocks,"rgba(248, 148, 6, 1)"),this.game.drawButton(35,35,290,550,this.game.blocks,"rgba(140, 20, 252, 1)",!0),this.game.drawBlock(20,100,260,490,"rgb(255,20,147)",!1),this.game.drawBlock(20,100,340,490,"rgb(255,20,147)",!1),this.game.drawBlock(100,20,260,490,"rgb(255,20,147)",!1),entrance=this.game.drawBlock(20,250,1e3,340,"rgba(140, 20, 252, 1)",!1),exit=this.game.drawBlock(190,20,1e3,340,"rgba(140, 20, 252, 1)",!1),reset=!0),game.blocks.forEach((function(t){"rgba(140, 20, 252, 1)"!=t.color&&(t.tile=!1)})),interval=setInterval((function(){button.game.seconds-=1}),1e3),setTimeout((function(){if(clearInterval(interval),button.game.playing=!1,button.game.retry+=1,game.blocks.forEach((function(t){"rgba(140, 20, 252, 1)"!=t.color&&(t.tile=!1,exit.tile=!0,entrance.tile=!0,button.game.maze.tile=!1)})),this.game.won)return null;this.game.mouse.x=100,this.game.mouse.y=500,buzzer.play()}),54e3))},o.prototype.collideX=function(t){button=this;var e=this.x,s=this.x+this.width,i=this.y,o=(this.color,this.y+this.height),r=t.x+t.width,h=t.y+t.height;return r-10>e&&r-10<s&&h+20>i&&h-20<o&&(this.blocks.forEach((function(t){t.color==this.color&&(click.play(),t.tile=!t.tile,"rgb(50,205,50)"==t.color&&button.timer(t),"rgba(140, 20, 252, 1)"==t.color&&button.maze(t))})),!0)},o.prototype.collideCheese=function(t){button=this;var e=this.x,s=this.x+this.width+30,i=this.y,o=this.y+this.height+30,r=t.x+t.width,h=t.y+t.height;return r>e&&r<s&&h>i&&h<o&&(click.play(),this.blocks.forEach((function(t){t.color==button.color&&(t.tile=!t.tile,"rgb(50,205,50)"==t.color&&button.timer(t),"rgba(140, 20, 252, 1)"==t.color&&button.maze(t))})),!0)},t.exports=o},function(t,e){function s(t,e,s){this.x=t,this.y=e,this.game=s,this.seconds=0,this.minutes=0,this.hours=0,this.width=100,this.height=100,first=!0}s.prototype.draw=function(t){t.font="20px Arial",this.change(),this.game.start&&(this.seconds<5&&this.minutes<1?t.strokeText("Hello there little one!",260,100):this.seconds<10&&this.minutes<1?(t.strokeText("Welcome to Aperture Science Laboratories",260,100),t.strokeText("Where Buttons are your only friends",260,150)):this.seconds<16&&this.minutes<1?t.strokeText("Use the W , A , S , and D keys to move around",260,100):this.seconds<23&&this.minutes<1?(t.strokeText("You are currently stocked with infinite cheese",260,100),t.strokeText("You can throw the Cheese with the the ENTER button",260,150)):this.seconds<30&&this.minutes<1?(t.strokeText("Try throwing the cheese at a button",260,100),t.strokeText("Cheese cannot be thrown through walls",260,150)):this.seconds<40&&this.minutes<1?(t.font="20px Arial",t.strokeText("Throwing cheese at a button will let you pass through that colored wall",250,100),t.strokeText("You can press TAB to restart at the center",250,150)):this.seconds<47&&this.minutes<1?(t.strokeText("The Green Button is on a 10 second timer",260,100),t.strokeText("All of other buttons are permanent",260,150)):this.seconds<54&&this.minutes<1?t.strokeText("You may not eat the cheese",260,100):this.seconds<60&&this.minutes<1?(t.font="20px Arial",t.strokeText("We know it is infinite but the last mouse ate too much... ",260,150)):this.seconds<6&&this.minutes<2?t.strokeText("Well lets not talk about the other subjects",260,150):this.seconds<10&&this.minutes<2?t.strokeText("erm I mean valued participants",260,150):this.seconds<20&&this.minutes<2&&t.strokeText("anyways the exit is over here => ",890,560)),this.minutes<10&&this.seconds>=10?t.strokeText("0"+this.hours+":0"+this.minutes+":"+this.seconds,500,300):this.minutes>=10&&this.seconds<10?t.strokeText("0"+this.hours+":"+this.minutes+":0"+this.seconds,500,300):this.minutes<10&&this.seconds<10?t.strokeText("0"+this.hours+":0"+this.minutes+":0"+this.seconds,500,300):t.strokeText("0"+this.hours+":"+this.minutes+":"+this.seconds,500,300)},s.prototype.change=function(){this.seconds>=60&&(this.minutes+=1,this.seconds=0,60==this.minutes&&(this.hours+=1,this.minutes=0))},t.exports=s},function(t,e,s){}]);
//# sourceMappingURL=main.js.map