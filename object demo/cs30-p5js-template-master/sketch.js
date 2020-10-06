// Object Demo

let mati;
let naaz;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mati = new Walker(width/2, height/2, "red");
  naaz = new Walker(200, 100, "green");
}

function draw() {
  //background(220);

  mati.move();
  mati.display();
  naaz.move();
  naaz.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      // left
      this.x-=1;
    }
    else if (choice < 50) {
      //right
      this.x +=1;
    }
    else if (choice < 75) {
      //up
      this.y -=1;
    }
    else {
      //down
      this.y +=1;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 5);
  }
}