////////////////////////////////////////////////////////////
//
//  Lesson 03 - Inputs
//
////////////////////////////////////////////////////////////

let counter = 0;
let pressed = false;
let randomTimeToWait;
const images = [];

function preload() {
  // Load all the image in a for loop
  // for loops take three arguments (initialization; condition; afterthought)
  for (i = 1; i < 41; i++) {
    images.push(loadImage(`../images/symbols/${i}.jpg`));
  }
}

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  imageMode(CENTER);
  blendMode(DIFFERENCE);
  // DEFINE A RANDOM DELAY TIME
  randomTimeToWait = Math.floor(random(2, 25));
}

// This function runs continuously, forever
function draw() {
  // Increment the delay counter
  counter++;

  if (pressed && counter > randomTimeToWait) {
    // Generate a random image & random scale
    randomImageIndex = Math.floor(random(0, images.length - 1));
    randomScaleModifier = Math.floor(random(100, 600));

    // Draw the image
    image(
      images[randomImageIndex],
      mouseX,
      mouseY,
      randomScaleModifier,
      randomScaleModifier
    );

    // Clear the delay counter and generate a new random delay
    randomTimeToWait = Math.floor(random(2, 15));
    counter = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// This function fires when the mouse is press
function mousePressed() {
  pressed = true;
}

// This function fires when the mouse is released
function mouseReleased() {
  pressed = false;
}
