////////////////////////////////////////////////////////////
//
//  Lession 02 - Animation
//
////////////////////////////////////////////////////////////

// NOTES:
// We have loaded the P5.js library in the index.html file.
// Since the P5.js library is loaded, we can use the functions
// and variables that are defined in the library.
// You can find the documentation for P5.js here: https://p5js.org/reference/

let size = 500;
let speed = 2;
let position1;
let position2;
let rotation1 = 0;
let rotation2 = 0;
let falling = true;
let colors = [
  [75, 22, 131],
  [77, 226, 180],
  [52, 187, 90],
];
// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  position1 = [windowWidth + size / 2, windowHeight / 2, size, size];
  position2 = [windowWidth / 2, 0 - size / 2, size, size];
}

// This function runs continuously, forever
function draw() {
  background(color(255, 204, 0));
  strokeWeight(0);
  fill(colors[0]);
  // Reset the position if the ellipse is off the page
  // else, animates its position based on our speed variable
  if (position1[0] <= -size) {
    position1[0] = windowWidth + size / 2;
  } else {
    position1[0] = position1[0] - speed;
  }

  // Draw our ellipse
  ellipse(...position1);

  rectMode(RADIUS);

  push();
  blendMode(EXCLUSION);
  fill(colors[1]);
  rotation1 = speed / 100 + rotation1;
  translate(width / 2, height / 2);
  rotate(rotation1, [windowWidth / 2, windowHeight / 2]);
  rect(0, 0, size / 10, size / 10);
  pop();

  push();
  fill(lerpColor(color(...colors[0]), color(...colors[1]), 0.3));
  translate(width / 2, height / 2);
  rotate(rotation1, [windowWidth / 2, windowHeight / 2]);
  rect(400, 0, size / 4, size / 4);
  pop();

  push();
  blendMode(EXCLUSION);
  if (falling) {
    position2[1] = position2[1] + speed;
    if (position2[1] > windowHeight + size / 2) {
      falling = false;
    }
  } else {
    position2[1] = position2[1] - speed;
    if (position2[1] < 0) {
      falling = true;
    }
  }
  ellipse(...position2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === "s") {
    saveGif("mySketch", 5);
  }
}
