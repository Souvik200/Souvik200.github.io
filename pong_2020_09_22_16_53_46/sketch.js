let x, y;
let i, j;
let dx = 2; //speed of x
let dy = 2; //speed of y
let radius = 5;
let score = 0;
let end, thanos, startBackground, startButton;
let time;
let isMovingLeft, isMovingRight, isMovingUp, isMovingDown;
let lastWindowSwitch = 0
let switchTime = 2000;
let isRed = false;
let inGame = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  end = loadImage("end.jpg");
  thanos = loadImage("thanos.gif");
  startBackground = loadImage("start.jpg");
  startButton = loadImage("startButton.jpg");
  x = width / 2;
  y = height / 2;
  i = width / 2;
  j = height - 20;
  q = windowWidth / 2;
  r = windowHeight - 40;
  s = windowWidth/10;
  t = windowHeight/20;
  isMovingRight = false;
  isMovingLeft = false;
  isMovingDown = false;
  isMovingUp = false;
  // frameRate(0);
}
let hit = false
let state = start

function draw() {
  background(0);
  if (state === start) {
    start();
  }
  else if (state === game) {
    game();
  }
  else if (state === dead) {
    dead();
  }
  console.log(isMouseInsideRect())

}

function moveBall() {
  x = x + dx;
  y += dy;
}

function bounceBall() {
  //check to see if we need to bounce
  if (x < 0 + radius || x > width - radius) {
    dx = dx * -1;
    fill(random(255), random(255), random(255));
  }

  if (y < 0 + radius) {
    dy *= -1;
    fill(random(255), random(255), random(255));
  }
  if (hit) {
    dy = dy * -1;
    dy -= 0.5;
    dx += 0.5;
    if (hit) {
      y = y - 12;
    }
    // dy *= -1;
    fill(random(255), random(255), random(255));
  }
  // if (hit) {
  //   dx = dx + 1;
  //   fill(random(255), random(255), random(255));
  // }
}

function displayBall() {
  circle(x, y, radius * 2);

  // rectMode(CENTER);
  // rect(x, y, radius*2);
}

function keyPressed() {
  if (key === 'a') {
    isMovingLeft = true;
  }
  if (key === 'd') {
    isMovingRight = true;
  }
}

function keyReleased() {
  if (key === 'a') {
    isMovingLeft = false;
  }
  if (key === 'd') {
    isMovingRight = false;
  }
}

function handleKeys() {
  if (isMovingLeft) {
    i -= 5;
  }
  if (isMovingRight) {
    i += 5;
  }
}

function bar() {
  handleKeys();
  fill("blue");
  rect(i, j, 40, 10, 50, 50, 100);

}

function colliding() {
  hit = collideRectCircle(i, j, 41, 12, x, y, radius * 2);
}

function theEnd() {
  imageMode(CENTER);
  image(end, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function snap() {
  imageMode(CENTER);
  image(thanos, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function countScore() {
  if (dx <= 2) {
    return score += 1;
  } else if (dx > 2 && dx <= 4) {
    return score += 2;
  } else if (dx > 4) {
    return score += 3;
  }
}

function game() {
  if (y < windowWidth) {
      colliding()
      moveBall();
      bounceBall();
      bar()
      displayBall();
  }
  else {
    state = dead;
  }
}
function start() {
  imageMode(CENTER);
  image(startBackground, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  // imageMode(CENTER);
  image(startButton, q, r, s, t);
  if (inGame){
    state = game;
  }
}
function mousePressed() {
  if (isMouseInsideRect()) {
    inGame = true;
  }
}
function isMouseInsideRect() {
  return mouseX > q &&
         mouseX < q + s &&
         mouseY > r &&
         mouseY < r + t;
}

function dead() {
  if (millis() > lastWindowSwitch + switchTime) {
      isRed = !isRed;
      lastWindowSwitch = millis();
    }

  if (isRed) {
    snap();
  } else {
    theEnd();
  }
}

  