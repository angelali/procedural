/******************************************************************************
 * lines pivoting around the end of the line
 /*****************************************************************************/

const DIM = 16;

let theta0 = 0;
let cellSize;
let cellRadius;

function setup() {
  makeCanvas();

  cellSize = width / DIM;
  cellRadius = cellSize / 2;

  angleMode(DEGREES);
}

function update() {
  theta0 += 2;
}

function draw() {
  clear();

  _.each(_.range(DIM), (row) => {
    _.each(_.range(DIM), (col) => {

      // Determine midpoint of line
      const xMid = row * cellSize + cellRadius;
      const yMid = col * cellSize + cellRadius;

      // Get rotation of line
      const lineTheta = theta0;

      push();
      translate(xMid, yMid);
      rotate(lineTheta);
      line(0, 0, cellRadius, cellRadius);
      pop();

      // go a [constant] amount in negative direction (find x, y)
      // const xStart = xMid + (cellRadius * Math.cos(lineTheta + 180));
      // const yStart = yMid + (cellRadius * Math.sin(lineTheta + 180));

      // go a [constant] amount in positive direction (find x, y)
      // const xEnd = xMid + (cellRadius * Math.cos(lineTheta));
      // const yEnd = yMid + (cellRadius * Math.sin(lineTheta));

      // draw a line from (x1, y1) to (x2, y2)
      // line(xStart, yStart, xEnd, yEnd);

    });
  });

  update();
}