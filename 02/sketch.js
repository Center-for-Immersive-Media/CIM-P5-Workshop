////////////////////////////////////////////////////////////
//
//  Lesson 02 - Animation
//
////////////////////////////////////////////////////////////

let origin = [0, 0];
let rotation = 0;
const size = 250;
const position = [0, 0];
const movementSpeed = 2;
const rotationSpeed = 0.01;

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(75, 22, 131);
  fill(0, 0, 0, 0); //RGBA Colors
}

// This function runs continuously, forever
function draw() {
  // clear();
  // background(255, 204, 0);

  // Update the origin & rotation every tick
  origin[0] = origin[0] + movementSpeed;
  origin[1] = origin[1] + movementSpeed;
  rotation = rotation + rotationSpeed;

  translate(origin[0], origin[1]);
  rotate(rotation);
  rect(position[0], position[1], size, size);
}

// Resizes our canvas to fit our window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
