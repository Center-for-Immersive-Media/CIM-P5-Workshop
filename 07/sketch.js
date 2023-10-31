let potentialPartners;
let pairs = [];
const noiseScale = 95;
const circleSize = 35;
const circles = [
  [200, 250, circleSize, circleSize, { used: false, index: 0 }],
  [600, 800, circleSize, circleSize, { used: false, index: 1 }],
  [1100, 500, circleSize, circleSize, { used: false, index: 2 }],
  [800, 700, circleSize, circleSize, { used: false, index: 3 }],
  [350, 900, circleSize, circleSize, { used: false, index: 4 }],
  [1100, 648, circleSize, circleSize, { used: false, index: 5 }],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(color(0, 0, 0, 0));
  strokeJoin(ROUND);
  frameRate(0);
  draw();

  potentialPartners = [];
}

function draw() {
  clear();
  background(color(255, 204, 0));
  stroke(0, 0, 0);

  // Draw Points
  DrawCircles();
  DefinePairs();

  pairs.map((pair) => {
    line();
  });
}

function DrawCircles() {
  for (i = 0; i < circles.length; i++) {
    text(`${i}`, circles[i][0] - 4, circles[i][1] + 4);
    ellipse(circles[i][0], circles[i][1], circles[i][2], circles[i][3]);
  }
}

function DefinePairs() {
  //  Clears potential partner list
  potentialPartners = [];
  for (i = 0; i < circles.length - 1; i++) {
    circles[i][4].used = false;
  }

  // Filters unused
  for (i = 0; i < circles.length; i++) {
    console.log(i + "of" + circles.length);

    if (circles[i][4].used == true) {
      console.log("already used");
      return;
    } else {
      // Filter new list
      potentialPartners = circles.filter((circle) => circle[4].used == false);
      const randomIndex = Math.round(random(0, potentialPartners.length - 1));
      pair = [circles[i][4].index, potentialPartners[randomIndex][4].index];
      pairs.push(pair);
      // console.log(potentialPartners);
      circles[i][4].used = true;
      circles[randomIndex][4].used = true;

      // const partner = Math.round(random(0, potentialPartners.length - 1));
      // console.log("Selected:" + partner, "From:", potentialPartners);
      // WavyLine(
      //   circles[i][0],
      //   circles[i][1],
      //   circles[partner][0],
      //   circles[partner][1]
      // );
      // circles[partner][4].used = true;
      // potentialPartners = circles.filter((circle) => circle[4].used == false);
    }
  }
}

function WavyLine(x1, y1, x2, y2) {
  console.log("test");
  const lineWeight = random(4, 8);
  const lineSegments = Math.floor(random(8, 18));
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
  }

  function Draw() {
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
  Draw();
}
