////////////////////////////////////////////////////////////
//
//  Lesson 03 - Inputs
//
////////////////////////////////////////////////////////////

// NOTES:
// We have loaded the P5.js library in the index.html file.
// Since the P5.js library is loaded, we can use the functions
// and variables that are defined in the library.
// You can find the documentation for P5.js here: https://p5js.org/reference/

let cnv;
let delay = 0;
let pressed = false;
const scaleMin = 175;
const scaleMax = 1000;
const delayMin = 2;
const delayMax = 25;
const files = [];
const images = [];

function preload() {
  for (i = 1; i < 41; i++) {
    files.push(`${i}.jpg`);
  }

  files.map((file) => {
    images.push(loadImage(`../images/symbols/${file}`));
  });
}

// This function runs once when the sketch starts up
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(color(255, 204, 0));
  imageMode(CENTER);
  blendMode(DIFFERENCE);
}

// This function runs continuously, forever
function draw() {
  delay++;
  const randomDelay = Math.floor(random(delayMin, delayMax));

  if (pressed && delay > randomDelay) {
    // clear();
    // background(color(255, 204, 0));
    randomImageIndex = Math.floor(random(0, images.length - 1));
    randomScaleModifier = Math.floor(random(scaleMin, scaleMax));
    image(
      images[randomImageIndex],
      mouseX,
      mouseY,
      randomScaleModifier,
      randomScaleModifier
    );
    delay = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener("mousedown", () => {
  pressed = true;
});

window.addEventListener("mouseup", () => {
  pressed = false;
});
