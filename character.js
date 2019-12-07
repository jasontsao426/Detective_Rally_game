class Characters  {
  constructor(x, y, xSpeed, ySpeed) {
    this.pos = createVector(x, y);

    this.size = 10;
    this.isVisible = false;

  }


}

class Strangers extends Characters  {
  constructor(x, y,characterNum, characterImage,characterImage2) {
    super(x, y, 2, 2);
    this.str= characterNum;
    this.characterImage = characterImage;
    this.characterImage2 = characterImage2;
  }

  update(player, walls) {


    this.isVisible = player.isInViewField(this.pos.x, this.pos.y, this.size);

    if (dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y)<50  ){


      image(this.characterImage2, this.pos.x-40, this.pos.y-40, this.characterImage2.width/3, this.characterImage2.height/3);
fill(200);
textAlign(CENTER);
textSize(20);
translate(width/3-100, height/2 );
text(this.str,0,0,width/2, height/2);
    }


  }

  show() {
    if (this.isVisible) {


      image(this.characterImage, this.pos.x-40, this.pos.y-40, this.characterImage.width/3, this.characterImage.height/3);

    }
  }
}
