////////////////////////////////////////////////////////////
//
//  Lession 04 - Mixing media
//
////////////////////////////////////////////////////////////

// NOTES:
// We have loaded the P5.js library in the index.html file.
// Since the P5.js library is loaded, we can use the functions
// and variables that are defined in the library.
// You can find the documentation for P5.js here: https://p5js.org/reference/

let shape, aspectRatio, scaledWidth, scaledHeight;
let maskPosition = [];
const margin = 50;
const imageScale = 0.2;
const circleScale = 0.2;

// This fuction runs before we start our application
function preload() {
  img = loadImage("../images/marks/reflections_texture.jpg");
}

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  shape = createGraphics(windowWidth, windowHeight);
  aspectRatio = img.width / img.height;
  scaledWidth = img.width * imageScale;
  scaledHeight = img.height * imageScale;
  maskPosition[0] = windowWidth / 2;
  maskPosition[1] = windowHeight / 2;

  fill(0, 0, 0, 0);
  ellipseMode(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);
}

// This function runs continuously, forever
function draw() {
  shape.clear();
  clear();
  background(225, 225, 225);
  push();
  fill(255, 0, 0);
  shape.ellipse(maskPosition[0] - 125, windowHeight / 2, 500, 500);
  shape.ellipse(maskPosition[0] + 125, windowHeight / 2, 500, 500);
  // img.mask(shape);
  pop();
  image(img, windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight);
  rect(windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight);
  image(shape, maskPosition[0], maskPosition[1]);
  // maskPosition[0] = maskPosition[0] + 0.5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
