

let player;
let walls = [];
let characters = [];
let target;

//load gif
//var gif_createImg;
let backSong;
//load images
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let diamond;
let dumpling;
//let gif1

function preload() {
	//load images & gif
	c1 = loadImage('c1.png');
	c2 = loadImage('c2.png');
	c3 = loadImage('c3.png');
	c4 = loadImage('c4.png');
	c5 = loadImage('c5.png');
	c6 = loadImage('c6.png');
	c7 = loadImage('c7.png');
	diamond = loadImage('diamond.png');
  dumpling = loadImage('dumpling.png');
 //gif1 = loadImg("millyrock.gif");

backSong = loadSound('backsong.mp3');
}

function setup() {
	window.setTimeout(function(){
		backSong.play()
	}, 5000);

  let canvas =  createCanvas(windowWidth, windowHeight);


   walls.push(new Boundary(0, height/5, width/3, height/5));
   walls.push(new Boundary(width/4, height/5, width/4,height/2));
   walls.push(new Boundary(width/10, height/4, width/5, height/4));
  walls.push(new Boundary(width/5, height/2, width/5, height/4));
  walls.push(new Boundary(width/10, height/2, width/4, height/2));
   walls.push(new Boundary(width*3/10, height*3/5, width*3/10, height*4/5));
  walls.push(new Boundary(width/10, height*3/5, width/10, height*4/5));
  walls.push(new Boundary(0, height*4/5, width*3/10, height*4/5));
  walls.push(new Boundary(width/5, height*4/5, width/5, height*9/10));
  walls.push(new Boundary(width/2, height/3, width/2, height*2/3));
  walls.push(new Boundary(width/2, height*2/5, width*3/5, height*2/5));
  walls.push(new Boundary(width*2/5, height*2/3, width/2, height*2/3));
  walls.push(new Boundary(width*3/5, height/2, width/2, height/2));
  walls.push(new Boundary(width*3/5, height/2, width*3/5, height*4/5));
  walls.push(new Boundary(width*3/5, height*4/5, width*4/5, height*4/5));
  walls.push(new Boundary(width*4/5, height*4/5,width*4/5, height/2));
  walls.push(new Boundary(width*7.5/10, height*3/5, width*7.5/10, height*2/3));
  walls.push(new Boundary(width*7.5/10, height*2/3,width*7/10, height*2/3));
  walls.push(new Boundary(width*7/10, height*2/3,width*7/10, height/2));
  walls.push(new Boundary(width*7/10, height/2,width, height/2));
  walls.push(new Boundary(width*9/10, height*2/3,width*9/10, height));
  walls.push(new Boundary(width*2/3, 0,width*2/3, height*2/5));
  walls.push(new Boundary(width*2/3, height/3,width*4/5, height/3));
  walls.push(new Boundary(width*9/10, height/5, width, height/5));
  walls.push(new Boundary(width*9.5/10, height/5, width*9.5/10, height*2/5));
  walls.push(new Boundary(width/2, height/4,width/2, 0));
  walls.push(new Boundary(width*5.5/10, height/6,width*2/3, height/6));
  walls.push(new Boundary(width*3/5, height/6,width*3/5, height/10));
  walls.push(new Boundary(width*9/10, height*2/3, width*9.5/10, height*2/3));
  walls.push(new Boundary(width/10, height/4, width/10, height*1.5/5));

  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));


  player = new Player();
  target = new Treasure(random(width), random(height));

// target.push(new target(width/10, height));

characters.push(new Strangers(width*2.3/10, height*2/5,"Begger: Oh, good sir. You're in the wrong place. This is not somewhere that a men like you should be at. Look around, and you can find all you need, my friend." , c1));
characters.push(new Strangers(width/4, height*3.5/5,"Pawnshop owner: Ugh... here comes another idoit. I already told one of you I got no one coming for no pearl necklace. Look at you pathetic boy, you're all the same to me. A bunch of faithless creatures that only works for money. Man like you got no beliefs. hahahhahaahhahha!",c2));
characters.push(new Strangers(width*5.5/10, height*4.2/10,"Old man: Young man, you seems to be lost. It seems like you are searching for something. Whatever it is, are you sure it is something that you are really looking for?",c4));
  characters.push(new Strangers(width*7.8/10, height*3.8/5, "Deli waitress: (crying) stop asking me about the necklace. You men are all the same, all you care about is yourself. Do you ever know how to love?",c5));
  characters.push(new Strangers(width*9.7/10, height*1.2/5,"Street Punk: wasup? wasup? Show me some swag dective. Maybe that will wipe some of that sickness off of your face.",c6));
  characters.push(new Strangers(width*9.5/10, height*3/4,"This is a Dumpling, eat it and move on with your miserable life! ", dumpling));
	characters.push(new Strangers(width*9.5/10, height*3/4,"Nun: Ah, my child it seems like you've reached to the bottom of your heart. Do you know what you want in life now? Go, get rid of your job, marry a girl, believe in yourself, and find a life that is worth living.", c7));

}


function moveByTo(keys, x, y) {
  for (let key of keys) {
    if (keyIsDown(key) && !player.collidesIn(walls, x, y)) {
      if (x === 0) {
        player.pos.y += y;
      } else {
        player.pos.x += x;
      }
    }
  }
}

function updateControlls() {

  let speed = 3;
  moveByTo([87], 0, -speed);
  moveByTo([83], 0, speed);
  moveByTo([65], -speed, 0);
  moveByTo([68], speed, 0);
}

function mouseMoved() {

    player.lookAt(mouseX, mouseY);
}

function gameover() {
  for(let character of characters) {

    character.isVisible = true;
    character.show();
  }


    wall.show();

  target.isVisible = true;
  target.show();


}



function draw() {

	image(c1, width*2.3/10, height*2/5, c1.width/30, c1.height/30);
	image(c2, width*2.3/10, height*2/5, c2.width/30, c2.height/30);
	image(c4, width*2.3/10, height*2/5, c4.width/30, c4.height/30);
	image(c5, width*2.3/10, height*2/5, c5.width/30, c5.height/30);
	image(c6, width*2.3/10, height*2/5, c6.width/30, c6.height/30);
	image(c7, width*2.3/10, height*2/5, c7.width/30, c7.height/30);

  background(0);
  updateControlls();

  player.update(walls);
  player.show();

  for(let character of characters) {
    character.update(player, walls);
    character.show();

  }

  target.update(player);
  target.show();

}

//load image
//load sound
//change library
// Begger: Oh, good sir. You're in the wrong place. This is not somewhere that a men like you should be at. Look around, and you can find all you need, my friend.
// pawnshop owner: Ugh... here comes another idoit. I already told one of you I got no one coming for no pearl necklace. Look at you pathetic boy, you're all
//the same to me. A bunch of faithless creatures that only works for money. Man like you got no beliefs. hahahhahaahhahha!
// Street Punk: wasup? wasup? Show me some swag dective. Maybe that will wipe some of that sickness off of your face.
//Old man: Young man, you seems to be lost. It seems like you are searching for something. Whatever it is, are you sure it is something that you are
// really looking for?
//Deli waitress: (crying) stop asking me about the necklace. You men are all the same, all you care about is yourself. Do you ever know how to love?
