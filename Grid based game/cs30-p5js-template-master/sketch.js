// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZEX = 15; 
const GRIDSIZEY = 10;
let playerX = 0;
let playerY = 5;
let end, thanos, startBackground, startButton, canon; //pictures
let startXCordinate, startYCordinate, StartWidth, startHeight;
let canonXCordinate, canonYCordinate, canonWidth, canonHeight;
let state = "start";
let inGame;
let x, y, isDragging;

function preload() {
  grid = loadStrings("assets/grids");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startBackground = loadImage("start.jpg");
  startButton = loadImage("startButton.jpg");
  canon = loadImage("canon.jpg");
  //mainMenuButton = loadImage("mainmenu.png");
  startXCordinate = windowWidth / 2.15;
  startYCordinate = windowHeight - 40;
  StartWidth = windowWidth/10;
  startHeight = windowHeight/20;
  canonXCordinate = windowWidth - (GRIDSIZEX-9);
  canonYCordinate = windowHeight - 40;
  canonWidth = windowWidth/10;
  canonHeight = windowHeight/20;

  //place player
  grid[playerY][playerX] = 9;

  cellWidth = width / GRIDSIZEX;
  cellHeight = height / GRIDSIZEY;

  // convert Level into 2d array
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y=0; y<GRIDSIZEY; y++) {
    for (let x = 0; x<GRIDSIZEX; x++) {
      grid[y][x] = int(grid[y][x]);
    }
  }
}

function draw() {
  background(220);
  displayGrid();
  // if (state === "start") {
  //   start();
  // }
  // else if (state === "game") {
  //   displayGrid();
  // }
}

function displayGrid() {
  for (let y = 0; y < GRIDSIZEY; y++) {
    for (let x = 0; x < GRIDSIZEX; x++) {

      if (grid[y][x] === 0) {
        fill(48,48,48);
        rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
        imageMode(CENTER);
        image(canon, canonXCordinate, y, cellWidth*2, cellHeight*2);
      }

      else if (grid[y][x] === 3) {
        fill("red");
        rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
      }

      else if (grid[y][x] === 2){
        fill(61,30,0);
        rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
      }

      else if (grid[y][x] === 1) {
        fill(12,102,0);
        rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
      }
    }
  }
  isMouseInsideCanon();
}



function start() {
  //inMenu = false;
  imageMode(CENTER);
  image(startBackground, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  imageMode(CORNER);
  image(startButton, startXCordinate, startYCordinate, StartWidth, startHeight);
  if (inGame){
    state = "game";
    //inMenu = false;
  }
}

function mousePressed() {
  if (isMouseInsideRect()) {
    inGame = true;
  }
  if (isMouseInsideCanon()) {
    isDragging = true;
  }
}

function isMouseInsideRect() {
  return mouseX > startXCordinate &&
         mouseX < startXCordinate + StartWidth &&
         mouseY > startYCordinate &&
         mouseY < startYCordinate + startHeight;
}

function mouseReleased() {
  isDragging = false;
}

function isMouseInsideCanon() {
  return mouseX > x &&
         mouseX < x + cellWidth*2 &&
         mouseY > y &&
         mouseY < y + cellHeight*2;
}

function moveRectangle() {
  // move rectangle if required
  if (isDragging) {
    x = mouseX - cellWidth;
    y = mouseY - cellHeight;
  }
}