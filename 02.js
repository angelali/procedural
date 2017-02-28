/******************************************************************************
 * like the last one but with rainbows !!!
 /*****************************************************************************/

// note to self: read this color theory primer http://krazydad.com/tutorials/makecolors.php

const makeColors = function(color) {
  return _.map(_.range(40), function(d) {
    return color(`hsla(${d * 9}, 100%, 50%, 0.5)`)
  });
}

// globals
let canvasLength;
let colors;
let circleIndex = 0;
let circleRadius = 0;


function newCircle() {
  if (circleIndex === (colors.canvasLength - 1)) circleIndex = 0;
  else circleIndex++;

  circleRadius = 0;
}

/* woop woop */

function setup() {
  makeCanvas();
  ellipseMode(RADIUS);

  noStroke();

  colors = makeColors(color);

  canvasLength = width / 2;
}

function draw() {
  if (circleRadius > (canvasLength * Math.sqrt(2)) + 10) {
    newCircle();
  }

  fill(colors[circleIndex]);
  ellipse(canvasLength, canvasLength, circleRadius, circleRadius);

  circleRadius += 10;
}
