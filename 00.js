/******************************************************************************
 * riff on random walker example from the internet
 /*****************************************************************************/

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    stroke(0);
    ellipse(this.x, this.y, 2, 2);
  }

  step() {
    const stepX = Math.round(Math.random() * 2) - 1;
    const stepY = Math.round(Math.random() * 2) - 1;

    this.x += 10 * stepX;
    this.y += 10 * stepY;
  }
}

let walker;

function setup() {
  frameRate(120);

  makeCanvas();

  walker = new Walker();
}

function draw() {
  walker.step();
  walker.display();
}
