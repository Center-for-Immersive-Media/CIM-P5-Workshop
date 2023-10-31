////////////////////////////////////////////////////////////
//
//  Lesson 05 - Mixing media
//
////////////////////////////////////////////////////////////

let videoMask, imageMapCursor, imageMapIndex;
const size = 1000;
const images = [[], [], []];

// This function runs before we start our application
function preload() {
  for (i = 1; i <= 6; i++) {
    images[0].push(loadImage(`../images/stop_motion/${i}.png`));
  }
  for (i = 7; i <= 12; i++) {
    images[1].push(loadImage(`../images/stop_motion/${i}.png`));
  }
  for (i = 13; i <= 18; i++) {
    images[2].push(loadImage(`../images/stop_motion/${i}.png`));
  }

  // Create a video that autoplays on mute
  vid = createVideo("../videos/RainbowTextureLoopedCompressed.mp4");
  vid.muted = true;
  vid.hide();
  vid.loop();
  vid.volume(0);
  vid.play();
}

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  imageMode(CENTER);

  // Create a shape graphic
  videoMask = createGraphics(windowWidth, windowHeight);
}

// This function runs continuously, forever
function draw() {
  // Clear shape, image buffer & set background
  videoMask.clear();
  clear();
  background(255, 204, 0);

  // Add an ellipse to our video mask
  videoMask.ellipse(mouseX, mouseY, size / 2, size / 2);
  vid.mask(videoMask);

  // Draw our video
  image(vid, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);

  // Map our image to cursor position
  imageMapCursor = Math.round(map(mouseY, 0, windowHeight, 0, 2));
  imageMapIndex = Math.round(map(mouseX, 0, windowWidth, 0, 5));

  // Draw our subject
  image(
    images[imageMapCursor][imageMapIndex],
    windowWidth / 2,
    windowHeight - size / 2,
    size,
    size
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
