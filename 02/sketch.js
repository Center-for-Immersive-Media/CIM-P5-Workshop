////////////////////////////////////////////////////////////
//
//  Lesson 02 - Animation
//
////////////////////////////////////////////////////////////

let origin, data;
let rotation = 0;
let delta = 0;
const movementSpeed = 1;
const rotationSpeed = 0.01;
const delay = 2;

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(75, 22, 131);
  fill(0, 0, 0, 0); //RGBA Colors

  // Define a starting point for our rect and its origin
  data = [0, 0, 250, 250];
  origin = [0, 0];
}

// This function runs continuously, forever
function draw() {
  // Update the origin & rotation every tick
  origin[0] = origin[0] + movementSpeed;
  origin[1] = origin[1] + movementSpeed / 1.5;
  rotation = rotation + rotationSpeed;

  // Draw a rect if we've waited long enough
  if (delta == delay) {
    delta = 0;
    translate(...origin);
    rotate(rotation);
    rect(data[0], data[1], data[2], data[3]);
    // We'll show a better way to do this in our next example
  }

  // Increment time passed
  delta++; // OR delta = delta + 1;
}

// Resizes our canvas to fit our window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
