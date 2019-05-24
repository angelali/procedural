function makeCanvas(useWebGL) {
  const CONTAINER_ID = 'container';

  const height = window.innerHeight;
  const width = window.innerWidth;

  let canvas;
  if (useWebGL) {
    canvas = createCanvas(width - 320, height, WEBGL);
  }
  else {
    canvas = createCanvas(width - 320, height);
  }

  canvas.parent(CONTAINER_ID);
}
