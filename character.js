class Characters  {
  constructor(x, y, xSpeed, ySpeed) {
    this.pos = createVector(x, y);

    this.size = 10;
    this.isVisible = false;
  }


}

class Treasure extends Characters  {
  constructor(x, y) {
    super(x, y, 0, 0);
  }

  update(player) {
    this.isVisible = player.isInViewField(this.pos.x, this.pos.y, this.size);
  }

  show() {
    if (this.isVisible) {
      noStroke();
      noFill();
      // fill(10, 100, 200);
      circle(this.pos.x, this.pos.y, this.size);
      image(diamond, this.pos.x-25, this.pos.y-25, diamond.width/30, diamond.height/30);
    }
  }
}



class Strangers extends Characters  {
  constructor(x, y,characterNum, characterImage) {
    super(x, y, 2, 2);
    this.str= characterNum;
    this.characterImage = characterImage;
  }

  update(player, walls) {


    this.isVisible = player.isInViewField(this.pos.x, this.pos.y, this.size);
    // console.log(this.pos,player.pos);
    if (dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y)<30){
      // console.log(this.str)
fill(200);
textAlign(CENTER);
textSize(20);
translate(width/3-100, height/2 );
text(this.str,0,0,width/2, height/2);
    }


  }

  show() {
    if (this.isVisible) {
      noStroke();
      noFill();
      //fill(150, 50, 100);
    //  image(this.str, this.pos.x-60, this.pos.y-40, this.str.width/25, this.str.height/25);
      image(this.characterImage, this.pos.x-60, this.pos.y-40, this.characterImage.width/60, this.characterImage.height/60);
      circle(this.pos.x, this.pos.y, this.size);
    }
  }
}
