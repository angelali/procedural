


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *
 * just a spinny bloop                                                         *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



/******************************************************************************
 * forevers
 *****************************************************************************/

const OBJ_SIZE = {
  min: 30,
  max: 45,
  rate: 0.5,
}

const OBJ_PROPORTION = {
  min: 1,
  max: 1.6,
}


const NUM_RINGS = 100;
const MAX_OBJ_SIZE = 12;

const BASE_RING_BRIGHTNESS = {
  min: 40,
  max: 60,
}

const OBJ_ROTATION_RATE = 3;
const OBJ_SCALE_RATE = 4;

/******************************************************************************
 * not forevers
 *****************************************************************************/

let objSize = OBJ_SIZE.min;
let objSizeDirection = 1;
let objRotation = 0;
let objProportion = OBJ_PROPORTION.min;
let objProportionDirection = 1;

let baseRingBrightness = BASE_RING_BRIGHTNESS.min;
let baseRingBrightnessDirection = 1;

/******************************************************************************
 * lifecycle
 *****************************************************************************/

function setup() {
  makeCanvas();

  frameRate(30);

  angleMode(DEGREES);
  colorMode(HSB);
  noStroke();
}

function draw() {
  clear();

  push();
  translate(width / 3, height / 2);
  drawObject(0);
  pop();

  push();
  translate(width * 2 / 3, height / 2);
  drawObject(1);
  pop();

  update();
}

function update() {
  // Update object size
  if (objSize < OBJ_SIZE.min || objSize > OBJ_SIZE.max) {
    objSizeDirection *= -1;
  }

  objSize += objSizeDirection * OBJ_SIZE.rate;

  // Update object rotation
  objRotation = (objRotation + 1) % 360;

  // Update base ring brightness
  if (baseRingBrightness < BASE_RING_BRIGHTNESS.min || baseRingBrightness < BASE_RING_BRIGHTNESS.max) {
    baseRingBrightnessDirection *= -1;
  }

  baseRingBrightness += baseRingBrightnessDirection;

  // Update object proportion
  if (objProportion < OBJ_PROPORTION.min || objProportion > OBJ_PROPORTION.max) {
    objProportionDirection *= -1;
  }

  objProportion += objProportionDirection * 0.01;
}

/******************************************************************************
 * utils
 /*****************************************************************************/

function drawObject(isOffset) {
  push();
  rotate(-1 * (objRotation * (isOffset ? -1 : 1)) * (isOffset ? 3.2 : OBJ_ROTATION_RATE));
  scale(getObjSize(isOffset) * (OBJ_SCALE_RATE / 20));

  for (let ring = NUM_RINGS; ring > 0; ring--) {
    fill(getRingColor(ring))
    ellipse(
      0, 0,
      ring * (MAX_OBJ_SIZE / NUM_RINGS),
      ring * getObjProportion(isOffset) * (MAX_OBJ_SIZE / NUM_RINGS)
    );
  }

  pop();
}

function getObjSize(isOffset) {
  if (!isOffset) return objSize;

  let offsetObjSize = objSize + 3;
  if (offsetObjSize >= OBJ_SIZE.max) {
    offsetObjSize = OBJ_SIZE.max - (offsetObjSize - OBJ_SIZE.max);
  }

  return offsetObjSize;
}

function getObjProportion(isOffset) {
  if (!isOffset) return objProportion;

  let offsetObjProportion = objProportion + 0.1;
  if (offsetObjProportion >= OBJ_PROPORTION.max) {
    offsetObjProportion = OBJ_PROPORTION.max - (offsetObjProportion - OBJ_PROPORTION.max);
  }

  return offsetObjProportion;
}

function getRingColor(ring) {
  const amountToAdd = (ring / NUM_RINGS) * (90 - baseRingBrightness);
  return color(0, 0, baseRingBrightness + amountToAdd);
}