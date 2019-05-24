/******************************************************************************
 * circle getting bigger from the center
 /*****************************************************************************/

let canvasLength;

let circleColor = -1;
let circleRadius = 1;


function reset() {
  circleColor *= -1;
  circleRadius = 1;
}

/* woop woop */

function setup() {
  makeCanvas();
  ellipseMode(RADIUS);
}

function draw() {
  if (circleRadius > ((Math.max(width, height) / 2) * Math.sqrt(2) + 10)) {
    reset();
  }

  circleColor === 1 ? fill(255) : fill(0);
  ellipse(width / 2, height / 2, circleRadius, circleRadius);

  circleRadius = circleRadius + 10;
}
