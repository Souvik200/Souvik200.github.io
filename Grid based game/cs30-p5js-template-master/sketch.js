// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZE = 50;
let playerX = 8;
let playerY = 10;
let end, thanos, startBackground, startButton; //pictures
let startXCordinate, startYCordinate, StartWidth, startHeight;
let state = "start";
let inGame;

function setup() {
  createCanvas(windowWidth, windowHeight);

  startBackground = loadImage("start.jpg");
  startButton = loadImage("startButton.jpg");
  //mainMenuButton = loadImage("mainmenu.png");
  startXCordinate = windowWidth / 2.15;
  startYCordinate = windowHeight - 40;
  StartWidth = windowWidth/10;
  startHeight = windowHeight/20;

  grid = generateEmptyGrid(GRIDSIZE);

  //place player
  grid[playerY][playerX] = 9;

  cellWidth = width / grid[0].length +50;
  cellHeight = height / grid.length + 50;
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
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      else {
        fill("black");
      }

      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

function generateEmptyGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function generateRandomGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      if (random(100) < 50) {
        grid[i].push(0);
      }
      else {
        grid[i].push(1);
      }
    }
  }
  return grid;
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