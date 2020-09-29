// bouncing circle

// let ball;
let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // spawnBall();
}

function draw() {
  background(220);
  moveBalls();
  displayBalls();
  checkForDeath();
}

function mousePressed() {
  spawnBall();
}

function checkForDeath() {
  for (let i=theCircles.length-1; i>=0; i--) {
    if (theCircles[i].bouncingCount >= 10) {
      //time to die
      theCircles.splice(i, 1);
    }
  }
}

function moveBalls() {
  for(let i=0; i<theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;
  
    if(theCircles[i].x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
      theCircles[i].bouncingCount += 1;
    }
  
    if(theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius < 0) {
      theCircles[i].dy *= -1;
      theCircles[i].bouncingCount += 1;
    }
  }
}

function displayBalls() {
  for (let ball of theCircles) {
    fill(ball.theColor);
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function spawnBall() {
  let ball = {
    x: mouseX,
    y: mouseY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(30, 0),
    theColor: color(random(255), random(255), random(255), random(255)),
    bouncingCount: 0,
  };
  theCircles.push(ball);
}
