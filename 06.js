const NUM_TRIANGLES = 48;

let triangleId = 1;
let direction = 1;
let currRotation = 0;

function setup() {
  makeCanvas();

  angleMode(DEGREES);

  fill('rgba(0, 0, 0, 0.1)');
  stroke('rgba(0, 0, 0, 0.1');
}

function update() {
  triangleId += direction;

  if (triangleId === NUM_TRIANGLES || triangleId === 0) {
    direction *= -1;

    (direction === 1) ? fill('rgba(0, 0, 0, 0.1)') : fill('rgba(255, 255, 255, 0.2)');
  }
}

function draw() {
  translate(width / 2, height / 2);

  push();
  rotate((triangleId + currRotation) * 12);
  scale(triangleId / 12);
  triangle(0, -100, -10, 100, 10, 100);
  pop();

  update();
}
