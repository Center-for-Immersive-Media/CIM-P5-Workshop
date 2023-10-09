const noiseScale = 95;
const cicleSize = 35;
const circles = [
  // [200, 250, cicleSize, cicleSize, { used: false }],
  // [600, 800, cicleSize, cicleSize, { used: false }],
  [1100, 500, cicleSize, cicleSize, { used: false }],
  // [800, 700, cicleSize, cicleSize, { used: false }],
  // [350, 900, cicleSize, cicleSize, { used: false }],
  [1100, 648, cicleSize, cicleSize, { used: false }],
];

// const test = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeJoin(ROUND);
  frameRate(1 / 2);
  // draw();
}

function draw() {
  clear();
  fill(color(0, 0, 0, 0));
  const w = circles[0][0];
  const h = circles[0][1];
  const x = w / 10;

  let potentialPartners = [];
  for (i = 0; i < circles.length - 1; i++) {
    circles[i][4].used = false;
  }
  potentialPartners = circles.filter((circle) => circle[4].used == false);

  for (i = 0; i < circles.length - 1; i++) {
    if (circles[i][4].used == true) {
      return;
    } else {
      const test = random(0, potentialPartners.length - 1);
      console.log(Math.round(test), potentialPartners);
      const partner = Math.round(random(0, test));
      // console.log("Selected:" + partner, "From:", potentialPartners);

      if (partner == i) {
        // console.log("MATCHED");
      } else {
        console.log(i, partner);
        WavyLine(circles[i][0], circles[i][1], circles[partner][0], circles[partner][1]);
        circles[partner][4].used = true;
      }
    }
  }

  for (i = 0; i < circles.length; i++) {
    if (i == 0) {
      stroke(255, 0, 0);
    } else {
      stroke(0, 0, 0);
    }
    ellipse(circles[i][0], circles[i][1], circles[i][2], circles[i][3]);
  }
}

function WavyLine(x1, y1, x2, y2) {
  const lineWeight = random(4, 8);
  const lineSegments = Math.floor(random(8, 18));
  let verticies = [];

  function InterpolateWavyVerticies() {
    let negativeDirection = random([true, false]);
    const xyPositive = x1 - x2 < 0 && y1 - y2 < 0 ? true : false;
    const xPositive = x1 - x2 < 0 && y1 - y2 >= 0 ? true : false;
    const yPositive = x1 - x2 >= 0 && y1 - y2 < 0 ? true : false;
    const xyNegative = x1 - x2 > 0 && y1 - y2 > 0 ? true : false;

    // console.log(xyPositive, xPositive, yPositive, xyNegative);
    // Exit condition
    if (xyPositive == false && xPositive == false && yPositive == false && xyNegative == false) {
      console.log("Points too close together. Exiting.");
      return;
    }

    for (let i = 1; i <= lineSegments; i++) {
      if (xyPositive) {
        console.log("XY Positive");
        if (i == 1 || i == lineSegments - 1) {
          verticies.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          verticies.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i + x1 + (negativeDirection ? random(-noiseScale, 1) : random(1, noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i + y1 + (negativeDirection ? random(noiseScale, 1) : random(1, -noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (xPositive) {
        console.log("X Positive");
        if (i == 1 || i == lineSegments - 1) {
          verticies.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          verticies.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i + x1 + (negativeDirection ? random(-noiseScale, 1) : random(1, noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i + y1 + (negativeDirection ? random(-noiseScale, 1) : random(1, noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (yPositive) {
        console.log("Y Positive");
        if (i == 1 || i == lineSegments - 1) {
          verticies.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          verticies.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i + x1 + (negativeDirection ? random(noiseScale, 1) : random(1, -noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i + y1 + (negativeDirection ? random(noiseScale, 1) : random(1, -noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }

      if (xyNegative) {
        console.log("XY Negative");
        if (i == 1 || i == lineSegments - 1) {
          verticies.push([
            Math.floor(((x2 - x1) / lineSegments) * i + x1),
            Math.floor(((y2 - y1) / lineSegments) * i + y1),
          ]);
        } else {
          verticies.push([
            Math.floor(
              ((x2 - x1) / lineSegments) * i + x1 + (negativeDirection ? random(noiseScale, 1) : random(1, -noiseScale))
            ),
            Math.floor(
              ((y2 - y1) / lineSegments) * i + y1 + (negativeDirection ? random(-noiseScale, 1) : random(1, noiseScale))
            ),
          ]);
          negativeDirection = !negativeDirection;
        }
      }
      // console.log(verticies);
    }
  }

  function Draw() {
    beginShape();
    stroke(random(255), random(255), random(255));
    strokeWeight(Math.floor(random(2, 20)));
    vertex(circles[0][0], circles[0][1]);
    for (let i = 0; i < lineSegments - 1; i++) {
      vertex(verticies[i][0], verticies[i][1]);
    }
    vertex(circles[1][0], circles[1][1]);
    endShape();
  }

  InterpolateWavyVerticies();
  Draw();
}
