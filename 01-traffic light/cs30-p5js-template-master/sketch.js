// Traffic light
// Souvik Arkay
// Sept 23, 2020

let lastColorSwitch = 0;
let greenLightDuration = 5000;
let yellowLightDuration = 1000;
let redLightDuration = 5000;
let whichColorToDisplay = "green";
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawOutlineOfLights();
  chooseWhichLightToDisplay();
  showCorrectLight();
}

function drawOutlineOfLights() {
  //bos
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75, 200, 10,);

//   //lights
//   fill("red")
//   circle(width/2, height/2 - 65, 50) // first light
//   fill("yellow")
//   circle(width/2, height/2, 50)  //middle light
//   fill("green")
//   circle(width/2, height/2 + 65, 50) // bottom light
 }

function chooseWhichLightToDisplay() {
  if (whichColorToDisplay === "green") {
    if (millis() > lastColorSwitch + greenLightDuration) {
      whichColorToDisplay = "yellow";
      lastColorSwitch = millis();
    }
  }
  else if (whichColorToDisplay === "yellow") {
    if (millis() > lastColorSwitch + yellowLightDuration) {
      whichColorToDisplay = "red";
      lastColorSwitch = millis();
    }
  }
  else if (whichColorToDisplay === "red") {
    if (millis() > lastColorSwitch + redLightDuration) {
      whichColorToDisplay = "green";
      lastColorSwitch = millis();
    }
  }
} 

function showCorrectLight() {
  if (whichColorToDisplay === "red") {
    fill("red")
    circle(width/2, height/2 - 65, 50) // first light
  }
  if (whichColorToDisplay === "yellow") {
    fill("yellow")
    circle(width/2, height/2, 50)  //middle light
  }
  if (whichColorToDisplay === "green") {
    fill("green")
    circle(width/2, height/2 + 65, 50) // bottom light
  }
}