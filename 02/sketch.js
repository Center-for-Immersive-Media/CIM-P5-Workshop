////////////////////////////////////////////////////////////
//
//  Lesson 02 - Animation
//
////////////////////////////////////////////////////////////

// NOTES:
// We have loaded the P5.js library in the index.html file.
// Since the P5.js library is loaded, we can use the functions
// and variables that are defined in the library.
// You can find the documentation for P5.js here: https://p5js.org/reference/

let size = 250;
let speed = 2;
let origin;
let position;
let rotation = 0;
let drawDelta = 0;
let needsUpdate = true;
const frameDelay = 2;
const bgColor = [255, 204, 0];
const strokeColor = [75, 22, 131];

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(...bgColor);
  rectMode(CENTER);
  position = [0, 0, size, size];
  origin = [0, 0];
}

// This function runs continuously, forever
function draw() {
  drawDelta++;
  needsUpdate = drawDelta == frameDelay ? true : false;

  strokeWeight(1);
  fill(0, 0, 0, 0);
  stroke(strokeColor);
  // Doesn't accept an array
  translate(...origin);
  origin[0] = origin[0] + 1;
  origin[1] = origin[1] + 1;
  rotation = rotation + 0.01;
  if (needsUpdate) {
    drawDelta = 0;
    rotate(rotation);
    rect(...position);
  }
}

// Resizes our canvas to fit our window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
