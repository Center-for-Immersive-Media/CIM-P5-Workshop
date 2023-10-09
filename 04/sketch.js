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
import("../js/p5.min.js");

let shape, aspectRatio, scaledWidth, scaledHeight;
let maskPosition = [];
const margin = 50;
const imageScale = 0.2;
const circleScale = 0.2;
const circleOffset = 105;
const videoSize = 1080;
const videoAspectRatio = 16 / 9;
let windowAspectRatio;

// This function runs before we start our application
function preload() {
  img = loadImage("../images/marks/reflections_texture.jpg");
  vid = createVideo(["../videos/RainbowTextureLooped.mp4"]);
  vid.muted = true;
  vid.hide();
  vid.loop();
  vid.volume(0);
  vid.play();
}

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  windowAspectRatio = windowWidth / windowHeight;
  shape = createGraphics(windowWidth, windowHeight);
  aspectRatio = img.width / img.height;
  scaledWidth = img.width * imageScale;
  scaledHeight = img.height * imageScale;
  maskPosition[0] = windowWidth / 2;
  maskPosition[1] = windowHeight / 2;

  fill(0, 0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(4);
  ellipseMode(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);
}

// This function runs continuously, forever
function draw() {
  shape.clear();
  clear();
  background(color(255, 204, 0));

  rect(
    windowWidth / 2,
    windowHeight / 2,
    (videoSize / 1.5) * videoAspectRatio,
    videoSize / 1.5
  );
  rect(
    windowWidth / 2,
    windowHeight / 2,
    videoSize * videoAspectRatio,
    videoSize
  );
  shape.ellipse(
    mouseX - circleOffset,
    windowHeight / 2,
    (250 / 1.5) * videoAspectRatio,
    250
  );
  shape.ellipse(
    mouseX + circleOffset,
    windowHeight / 2,
    (250 / 1.5) * videoAspectRatio,
    250
  );
  // shape.rect(maskPosition[0] + circleOffset, windowHeight / 2, 500, 500);
  vid.mask(shape);
  image(
    vid,
    windowWidth / 2,
    windowHeight / 2,
    videoSize * videoAspectRatio,
    videoSize
  );

  // image(img, windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight);
  // rect(windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight);
  ellipse(
    mouseX - circleOffset,
    windowHeight / 2,
    (250 * videoAspectRatio) / 1.5,
    250
  );
  ellipse(
    mouseX + circleOffset,
    windowHeight / 2,
    (250 * videoAspectRatio) / 1.5,
    250
  );
  push();
  fill(0, 0, 0);
  ellipse(
    mouseX - circleOffset,
    windowHeight / 2,
    ((250 * videoAspectRatio) / 1.5) * 0.5,
    250 * 0.5
  );
  ellipse(
    mouseX + circleOffset,
    windowHeight / 2,
    ((250 * videoAspectRatio) / 1.5) * 0.5,
    250 * 0.5
  );
  fill(150, 175, 225);
  ellipse(
    mouseX - circleOffset,
    windowHeight / 2,
    ((250 * videoAspectRatio) / 1.5) * 0.25,
    250 * 0.5
  );
  ellipse(
    mouseX + circleOffset,
    windowHeight / 2,
    ((250 * videoAspectRatio) / 1.5) * 0.25,
    250 * 0.5
  );
  pop();

  // image(shape, maskPosition[0], maskPosition[1]);
  // maskPosition[0] = maskPosition[0] + 1.5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
