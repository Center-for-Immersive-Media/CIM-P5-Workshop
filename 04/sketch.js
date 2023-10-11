////////////////////////////////////////////////////////////
//
//  Lesson 04 - Inputs
//
////////////////////////////////////////////////////////////

let delay = 0;
let pressed = false;
let randomDelay;
const images = [];

function preload() {
  for (i = 1; i < 41; i++) {
    images.push(loadImage(`../images/symbols/${i}.jpg`));
  }
}

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(255, 204, 0));
  imageMode(CENTER);
  blendMode(DIFFERENCE);
  randomDelay = Math.floor(random(2, 25));
}

// This function runs continuously, forever
function draw() {
  delay++;

  if (pressed && delay > randomDelay) {
    // clear();
    // background(color(255, 204, 0));
    randomImageIndex = Math.floor(random(0, images.length - 1));
    randomScaleModifier = Math.floor(random(175, 1000));
    image(
      images[randomImageIndex],
      mouseX,
      mouseY,
      randomScaleModifier,
      randomScaleModifier
    );
    randomDelay = Math.floor(random(2, 25));
    delay = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  pressed = true;
}

function mouseReleased() {
  pressed = false;
}
