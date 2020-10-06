// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZE = 15; 
let playerX = 0;
let playerY = 5;
let end, thanos, startBackground, startButton; //pictures
let startXCordinate, startYCordinate, StartWidth, startHeight;
let state = "start";
let inGame;
let cellSize = 50;

function preload() {
  grid = loadStrings("assets/grids");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startBackground = loadImage("start.jpg");
  startButton = loadImage("startButton.jpg");
  //mainMenuButton = loadImage("mainmenu.png");
  startXCordinate = windowWidth / 2.15;
  startYCordinate = windowHeight - 40;
  StartWidth = windowWidth/10;
  startHeight = windowHeight/20;

  //place player
  grid[playerY][playerX] = 9;

  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

// convert Level into 2d array
for (let i=0; i<grid.length; i++) {
  grid[i] = grid[i].split(",");
}

//loop through the whole 2d array, and turn everything to numbers
for (let y=0; y<GRIDSIZE; y++) {
  for (let x = 0; x<GRIDSIZE; x++) {
    grid[y][x] = int(grid[y][x]);
  }
}

function draw() {
  background(220);
  if (state === "start") {
    start();
  }
  else if (state === "game") {
    displayGrid();
  }
}

function displayGrid() {
  for (let y = 0; y < GRIDSIZE; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {

      if (grid[y][x] === 0) {
        fill(48,48,48);
      }

      else if (grid[y][x] === 3) {
        fill("red");
      }

      else if (grid[y][x] === 2){
        fill(61,30,0);
      }

      else if (grid[y][x] === 1) {
        fill(12,102,0);
      }
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
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
}

function isMouseInsideRect() {
  return mouseX > startXCordinate &&
         mouseX < startXCordinate + StartWidth &&
         mouseY > startYCordinate &&
         mouseY < startYCordinate + startHeight;
}