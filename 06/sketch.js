let potentialPartners;
let wavy = true;
const noiseScale = 95;
const circleSize = 50;
const fontSize = 24;
const circles = [
  [200, 250, circleSize, circleSize],
  [1100, 700, circleSize, circleSize],
  [600, 500, circleSize, circleSize],
  [900, 800, circleSize, circleSize],
  [350, 600, circleSize, circleSize],
  [1100, 300, circleSize, circleSize],
  [1500, 750, circleSize, circleSize],
  [950, 900, circleSize, circleSize],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(color(0, 0, 0, 0));
  strokeJoin(ROUND);
  textSize(fontSize);
  frameRate(0);
  draw();
}

function draw() {
  clear();
  background(255, 204, 0);

  circles.map((circle, index) => {
    if (index % 2) {
      if (wavy) {
        console.log("drawing wavy line " + (index - 1) + " / " + index);
        WavyLine(
          circles[index - 1][0],
          circles[index - 1][1],
          circle[0],
          circle[1]
        );
        console.log(index);
        wavy = false;
      } else {
        console.log("drawing line");
        line(
          circles[index - 1][0],
          circles[index - 1][1],
          circle[0],
          circle[1]
        );
        wavy = true;
      }
    }
  });

  push();
  stroke(0, 0, 0);
  strokeWeight(3);
  DrawCircles();
  pop();
}

function DrawCircles() {
  for (i = 0; i < circles.length; i++) {
    text(`${i}`, circles[i][0] - 8, circles[i][1] + 8);
    ellipse(circles[i][0], circles[i][1], circles[i][2], circles[i][3]);
  }
}

function WavyLine(x1, y1, x2, y2) {
  const lineWeight = random(4, 8);
  const lineSegments = Math.floor(random(8, 18));
  // console.log(lineSegments + " total line segments");
  let vertices = [];

  function InterpolateWavyVertices() {
    let negativeDirection = random([true, false]);
    const xyPositive = x1 - x2 < 0 && y1 - y2 < 0 ? true : false;
    const xPositive = x1 - x2 < 0 && y1 - y2 >= 0 ? true : false;
    const yPositive = x1 - x2 >= 0 && y1 - y2 < 0 ? true : false;
    const xyNegative = x1 - x2 > 0 && y1 - y2 > 0 ? true : false;
    // Exit condition
    if (
      xyPositive == false &&
      xPositive == false &&
      yPositive == false &&
      xyNegative == false
    ) {
      console.log("Points too close together. Exiting.");
      return;
    }

    for (let i = 1; i <= lineSegments; i++) {
      if (xyPositive) {
        console.log("XY Positive");
        if (i == 1 || i == lineSegments - 1) {
          vertices.push([
            Math.round(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          vertices.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i +
                x1 +
                (negativeDirection
                  ? random(-noiseScale, 1)
                  : random(1, noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i +
                y1 +
                (negativeDirection
                  ? random(noiseScale, 1)
                  : random(1, -noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (xPositive) {
        console.log("X Positive");
        if (i == 1 || i == lineSegments - 1) {
          vertices.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          vertices.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i +
                x1 +
                (negativeDirection
                  ? random(-noiseScale, 1)
                  : random(1, noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i +
                y1 +
                (negativeDirection
                  ? random(-noiseScale, 1)
                  : random(1, noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (yPositive) {
        console.log("Y Positive");
        if (i == 1 || i == lineSegments - 1) {
          vertices.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          vertices.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i +
                x1 +
                (negativeDirection
                  ? random(noiseScale, 1)
                  : random(1, -noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i +
                y1 +
                (negativeDirection
                  ? random(noiseScale, 1)
                  : random(1, -noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (xyNegative) {
        console.log("XY Negative");
        if (i == 1 || i == lineSegments - 1) {
          vertices.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          vertices.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i +
                x1 +
                (negativeDirection
                  ? random(noiseScale, 1)
                  : random(1, -noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i +
                y1 +
                (negativeDirection
                  ? random(-noiseScale, 1)
                  : random(1, noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }
    }

    // console.log(vertices);
  }

  function Paint() {
    beginShape();
    stroke(random(255), random(255), random(255));
    strokeWeight(Math.floor(random(2, 20)));
    vertex(circles[0][0], circles[0][1]);
    for (let i = 0; i < lineSegments - 1; i++) {
      vertex(vertices[i][0], vertices[i][1]);
    }
    vertex(circles[1][0], circles[1][1]);
    endShape();
  }

  InterpolateWavyVertices();
  Paint();
}
