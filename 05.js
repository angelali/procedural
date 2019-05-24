/******************************************************************************
 * lines pivoting around the MIDDLE of the line
 /*****************************************************************************/

const DIM = 40;
const PADDING = 10;
const D_THETA_ITER = 2;
const D_THETA_CELL = 12;

let theta0 = 0;
let cellSize;
let cellRadius;


function setup() {
  makeCanvas();

  cellSize = width / DIM;
  cellRadius = cellSize / 2 - PADDING;

  angleMode(DEGREES);
}

function update() {
  theta0 += D_THETA_ITER;
}

function draw() {
  clear();

  _.each(_.range(DIM), (row) => {
    _.each(_.range(DIM), (col) => {

      // Determine midpoint of line
      const xMid = row * cellSize + cellRadius;
      const yMid = col * cellSize + cellRadius;

      // Get rotation of line
      const lineTheta = theta0 + (D_THETA_CELL * row) + (D_THETA_CELL * col);

      push();
      translate(xMid, yMid);
      rotate(lineTheta);
      line(cellRadius, 0, -1 * cellRadius, 0);
      pop();


    });
  });

  update();
}
