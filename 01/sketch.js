////////////////////////////////////////////////////////////
//
//  Lesson 01 - Getting started with P5.js
//
////////////////////////////////////////////////////////////

// NOTES:
// We have loaded the P5.js library in the index.html file.
// Since the P5.js library is loaded, we can use the functions
// and variables that are defined in the library.
// You can find the documentation for P5.js here: https://p5js.org/reference/

let size = 80;

// This function runs once when the sketch starts up
function setup() {
  // createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
}

// This function runs continuously, forever
function draw() {
  background(color(255, 204, 0));
  ellipse(50, 50, 80, 80);

  //// Crosshairs
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);

  ellipse(windowWidth / 2, windowHeight / 2, size, size);
  rect(windowWidth / 4, windowHeight / 2 - size / 2, size, size);
  triangle(
    windowWidth / 1.5 - size / 2,
    windowHeight / 2 - size / 2 + size,
    windowWidth / 1.5 + 58,
    windowHeight / 2 - 20,
    windowWidth / 1.5 + 86,
    windowHeight / 2 - size / 2 + size
  );

  line(
    windowWidth / 10,
    windowHeight / 10,
    windowWidth * 0.9,
    windowHeight * 0.9
  );

  textSize(32);
  text("Hello World", windowWidth / 2, 30);

  //// Offset the text by half of it's width to center the text
  textSize(64);
  fill(255, 255, 255);
  text("Hello World", windowWidth / 2 - textWidth() / 2, windowHeight / 4);

  //// But read the documentation because P5 provides a lot of helper functions
  //// which means you don't have to do it yourself.
  push();
  textAlign(CENTER);
  text("Hello World", windowWidth / 2, windowHeight / 3);
  pop();

  // Also push & pop allow us to isolate certain elements and parameters
}

// Function that runs when you resize the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
