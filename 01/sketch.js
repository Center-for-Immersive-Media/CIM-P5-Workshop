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

var size = 80;

// This function runs once when the sketch starts up
function setup() {
  // Create a full window canvas, set its background & colors
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  // Draw a circle
  ellipse(50, 50, 80, 80);

  // Draw crosshairs
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);

  // Draw a circle, rectangle & triangle
  ellipse(windowWidth / 2, windowHeight / 2, size, size);
  rect(windowWidth / 4, windowHeight / 2 - size / 2, size, size);

  // Draw text
  textSize(18);
  text("Hello World! It's nice to meet you.", windowWidth / 2, 30);

  // Offset the text by half of it's width to center the text
  textSize(48);
  textAlign(CENTER);
  strokeWeight(0);
  text(
    "Hello World! It's nice to meet you.",
    windowWidth / 2,
    windowHeight / 4
  );
}

// Function that runs when you resize the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
