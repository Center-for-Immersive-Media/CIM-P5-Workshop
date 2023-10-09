////////////////////////////////////////////////////////////
//
//  Lession 10 - Sol Lewitt Challenge
//
////////////////////////////////////////////////////////////

// NOTES:
// Each time they are in an exhibition, Sol Lewitt’s drawings are made right on the wall.
// The people drawing them use a set of instructions written by the artist.
// The instructions are open to interpretation: often, the people following them have to
// decide where the lines or shapes should go. A wall drawing like this one looks a little
// different every time it is created. At the end of an exhibition, the wall drawing is
// painted over and the instructions are stored until next time the drawing is made.
//
// Make a drawing by following the instructions below.
//
// 1. Find a piece of paper and a pencil.
// 2. Draw 24 tiny circles anywhere on a piece of paper..
// 3. Connect 12 of the circles with straight lines.
// 4. Connect 4 of the circles with wavy lines.
//
// Next, ask someone else in your family to follow the same instructions and make another drawing.
// How is it different from your drawing?
//
// https://whitney.org/education/families/kids-art-challenge/sol-lewitt
import("../js/p5.min.js");

const count = 24;
const size = 2;
const noiseScale = 1;
const cicleSize = 35;

let fps = 1 / 5;
let straightLineColor;
let circleColor;
let circleLineColor;

let circles = [];

// This function runs once when the sketch starts up
function setup() {
  // createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  distance = windowWidth / 2;

  strokeWeight(4);
  stroke(51);
  straightLineColor = color(210, 210, 210);
}

// This function runs continuously, forever
function draw() {
  frameRate(fps);
  circleColor = color(random(150, 225), random(150, 225), random(150, 225));
  circleLineColor = color(random(150, 225), random(150, 225), random(150, 225));
  clear();
  fill(color(0, 0, 0, 0));
  background(255, 255, 255);
  const lineWeight = random(4, 8);
  let randomCircleIndex;

  if (circles.length + 1 >= count) {
    circles = [];
  }
  for (i = 0; i < count; i++) {
    const randomSize = size * random(1, 10);
    let data = [
      random(0, windowWidth),
      random(0, windowHeight),
      randomSize,
      randomSize,
    ];
    circles.push(data);
  }
  circles.map((circle, index) => {
    if (index % 4 != 0 && index < count / 2) {
      stroke(straightLineColor);
      strokeWeight(4);
      const connection = Math.floor(random(0, circles.length - 1));
      console.log(connection);
      line(
        circles[index][0],
        circles[index][1],
        circles[connection][0],
        circles[connection][1]
      );
      // } else if (index % 2 != 0 && index < 4) {
      // } else if (index == 0) {
    } else if (index % 2 != 0 && index > count / 2) {
      // for (i = 1; i < lineSegments; i++) {
      randomCircleIndex = PickRandomCircle();
      DrawWaveyLine(
        circles[index][0],
        circles[index][1],
        circles[randomCircleIndex][0],
        circles[randomCircleIndex][1],
        index,
        randomCircleIndex
      );

      //   verticies.push([
      //     circles[i][0] <= circles[randomCircleIndex][0]
      //       ? (circles[i][0] - circles[randomCircleIndex][0]) /
      //           (lineSegments * index) +
      //         200
      //       : (circles[i][0] + circles[randomCircleIndex][0]) /
      //         (lineSegments * index),
      //     circles[i][1] <= circles[randomCircleIndex][1]
      //       ? (circles[i][1] - circles[randomCircleIndex][1]) /
      //         (lineSegments * index)
      //       : (circles[i][1] + circles[randomCircleIndex][1]) /
      //         (lineSegments * index),
      //   ]);
      //   // verticies.push([
      //   //   ((circles[i][0] - circles[randomCircleIndex][0]) / lineSegments) * i +
      //   //     circles[i][0] +
      //   //     (negativeDirection
      //   //       ? random(-noiseScale, 1)
      //   //       : random(1, noiseScale)),
      //   //   ((circles[i][1] - circles[randomCircleIndex][1]) / lineSegments) * i +
      //   //     circles[i][1],
      //   // ]);
      //   negativeDirection = !negativeDirection;
      // }
    }
  });

  // Drawing cicles
  for (i = 0; i < circles.length; i++) {
    fill(circleColor);
    stroke(circleLineColor);
    strokeWeight(random(2, 6));
    ellipse(...circles[i]);
  }
  // fps = random(4, 1 / 4);
}

function DrawWaveyLine(x1, y1, x2, y2, index, connectingCircleIndex) {
  let lineSegments = random(4, 8);
  let verticies = [];

  const xDirPositive =
    circles[index][0] - circles[connectingCircleIndex][0] >
    circles[connectingCircleIndex][0] - circles[index][0]
      ? true
      : false;
  const yDirPositive =
    circles[index][1] - circles[connectingCircleIndex][1] >
    circles[connectingCircleIndex][1] - circles[index][1]
      ? true
      : false;

  for (i = 0; i < lineSegments; i++) {
    verticies.push([
      ((xDirPositive
        ? circles[index][0] - circles[connectingCircleIndex][0]
        : circles[connectingCircleIndex][0] - circles[index][0]) /
        lineSegments) *
        i,
      ((yDirPositive
        ? circles[index][1] - circles[connectingCircleIndex][1]
        : circles[connectingCircleIndex][1] - circles[index][1]) /
        lineSegments) *
        i,
    ]);
  }

  beginShape();
  stroke(color(255, 100, 0));
  fill(color(0, 0, 0, 0));
  strokeWeight(12);
  stroke(random(255), random(255), random(255));
  vertex(x1, y1);
  for (let i = 0; i < lineSegments - 1; i++) {
    vertex(verticies[i][0], verticies[i][1]);
  }
  vertex(x2, y2);
  endShape();
}

function PickRandomCircle() {
  return Math.floor(random(0, circles.length - 1));
}

// ====== RESIZING THE CANVAS ======
//****************************
window.addEventListener("resize", () => {
  console.log("Resizing the canvas");
  resizeCanvas(windowWidth, windowHeight);
});
//****************************
