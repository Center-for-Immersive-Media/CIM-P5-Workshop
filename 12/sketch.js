// let potentialPartners = [];
let pairs = [];
const circleSize = 35;

let circles = [
  { id: 0, params: [200, 350, circleSize, circleSize], used: false },
  { id: 1, params: [1300, 1000, circleSize, circleSize], used: false },
  { id: 2, params: [450, 1025, circleSize, circleSize], used: false },
  { id: 3, params: [800, 1200, circleSize, circleSize], used: false },
  { id: 4, params: [650, 550, circleSize, circleSize], used: false },
  { id: 5, params: [900, 250, circleSize, circleSize], used: false },
  { id: 6, params: [850, 750, circleSize, circleSize], used: false },
  { id: 7, params: [1200, 450, circleSize, circleSize], used: false },
  { id: 8, params: [100, 950, circleSize, circleSize], used: false },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(color(0, 0, 0, 0));
  strokeJoin(ROUND);
  frameRate(0);
  draw();
}

function draw() {
  // console.log(circles);
  // Test();
  // clear();
  // background(color(255, 204, 0));
  // stroke(0, 0, 0);
  // Draw Points
  DrawCircles();
  DefinePairs();
  console.log(structuredClone(pairs));
  // console.log("testing");
  // pairs.map((pair) => {
  //   // console.log(pair);
  //   line(
  //     pair[0].params[0],
  //     pair[0].params[1],
  //     pair[1].params[0],
  //     pair[1].params[1]
  //   );
  // });
}

function DrawCircles() {
  for (i = 0; i < circles.length; i++) {
    push();
    fill(0, 0, 0);
    textSize(20);
    text(`${i}`, circles[i].params[0] - 6, circles[i].params[1] + 7);
    pop();
    ellipse(
      circles[i].params[0],
      circles[i].params[1],
      circles[i].params[2],
      circles[i].params[3]
    );
  }
}

function DefinePairs() {
  // console.log(structuredClone(pairs));
  let potentialPartners = circles.filter((circle) => circle.used == false);

  // Filters unused
  for (i = 0; i < circles.length; i++) {
    console.log(i);
    if (circles[i].used == true) {
      console.log("Skipping circle, already used");
    } else {
      circles[i].used = true;
      // // Filter new list
      potentialPartners = circles.filter((circle) => circle.used == false);
      if (potentialPartners.length == 0) {
        console.log("exiting loop");
        return;
      }
      const randomIndex = Math.round(random(0, potentialPartners.length - 1));
      circles[randomIndex].used = true;
      pair = [circles[i], potentialPartners[potentialPartners[randomIndex].id]];
      pairs.push(pair);
      // console.log(structuredClone(pairs));
      potentialPartners = circles.filter((circle) => circle.used == false);
      console.log(structuredClone(potentialPartners));
    }
  }
}

function ClearPairs() {
  for (i = 0; i < circles.length; i++) {
    circles[i].used = false;
  }
  pairs = [];
}
