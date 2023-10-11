////////////////////////////////////////////////////////////
//
//  Lesson 02 - Animation
//
////////////////////////////////////////////////////////////

let origin;
let position;
let rotation = 0;
let delta = 0;
const speed = 2;
const delay = 2;

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(75, 22, 131);
  fill(0, 0, 0, 0); //RGBA Colors
  position = [0, 0, 250, 250];
  origin = [0, 0];
}

// This function runs continuously, forever
function draw() {
  translate(...origin);
  origin[0] = origin[0] + 1;
  origin[1] = origin[1] + 1;
  rotation = rotation + 0.01;

  if (delta == delay) {
    needsUpdate = true;
    delta = 0;
    rotate(rotation);
    rect(...position);
  }

  delta++; // OR delta = delta + 1;
}

// Resizes our canvas to fit our window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
