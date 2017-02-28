function makeCanvas(useWebGL) {
  const CONTAINER_ID = 'container';

  let canvas;
  if (useWebGL) {
    canvas = createCanvas(800, 800, WEBGL);
  }
  else {
    canvas = createCanvas(800, 800);
  }

  canvas.parent(CONTAINER_ID);
}
