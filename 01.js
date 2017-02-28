/******************************************************************************
 * circle getting bigger from the center
 /*****************************************************************************/

let canvasLength;

let circleColor = -1;
let circleRadius = 0;


function reset() {
  circleColor *= -1;
  circleRadius = 0;
}

/* woop woop */

function setup() {
  makeCanvas();
  canvasLength = width / 2;

  ellipseMode(RADIUS);
}

function draw() {
  if (circleRadius > (canvasLength * Math.sqrt(2)) + 10) {
    reset();
  }

  circleColor === 1 ? fill(255) : fill(0);
  ellipse(canvasLength, canvasLength, circleRadius, circleRadius);

  circleRadius += 10;
}
