/******************************************************************************
 * a whole bunch of centrally expanding colorful circles (I hope)
 /*****************************************************************************/

// and ... let it be known that sketch #3 was when angela started running into performance issues

const makeColors = function(color) {
  return _.map(_.range(40), function(d) {
    return color(`hsla(${d * 9}, 100%, 50%, 0.2)`)
  });
}

// globals
let canvasLength;

let colors;
let circleIndex = 0;
let circleRadius = 0;

let bunchOfCircles = [];

function newCircle() {
  if (circleIndex === (colors.length - 1)) circleIndex = 0;
  else circleIndex++;

  circleRadius = 0;

  return {
    index: circleIndex,
    radius: circleRadius,
  }
}

/* woop woop */

function setup() {

  // frameRate();

  makeCanvas();
  ellipseMode(RADIUS);

  noStroke();

  colors = makeColors(color);

  bunchOfCircles.push(newCircle());
}

function draw() {
  // draw the circles
  bunchOfCircles.forEach(function(circle) {
    fill(colors[circle.index]);
    ellipse(width / 2, height / 2, circle.radius, circle.radius);
  });

  // update circles
  bunchOfCircles = _.map(bunchOfCircles, function(circle) {
    return {
      index: circle.index,
      radius: circle.radius + 10,
    }
  })

  // spawn a new circle (maybe)
  if (_.last(bunchOfCircles).radius > 40) {
    bunchOfCircles.push(newCircle());
  }
}
