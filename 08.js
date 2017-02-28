


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *
 * just a spinny bloop                                                         *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



/******************************************************************************
 * forevers
 *****************************************************************************/

const NUM_OBJ = 8;

const OBJ_SIZE = {
  min: 30,
  max: 40,
  rate: 0.2,
}

const OBJ_PROPORTION = {
  min: 2,
  max: 8,
  rate: 0.03,
}


const NUM_RINGS = 1;
const MAX_OBJ_SIZE = 12;

const BASE_RING_HUE = {
  min: 0,
  max: 360,
  rate: 1,
}

const OBJ_ROTATION_RATE = 3;
const OBJ_SCALE_RATE = 3;

/******************************************************************************
 * not forevers
 *****************************************************************************/

let objSize = OBJ_SIZE.min;
let objSizeDirection = 1;
let objRotation = 0;
let objProportion = OBJ_PROPORTION.min;
let objProportionDirection = 1;

let baseRingHue = BASE_RING_HUE.min;
let baseRingBrightnessDirection = 1;

/******************************************************************************
 * lifecycle
 *****************************************************************************/

function setup() {
  makeCanvas();

  frameRate(120);

  angleMode(DEGREES);
  colorMode(HSB);
  stroke(color('rgba(0, 0, 0, 0.1)'));
  strokeWeight(0);
}

function draw() {
  clear();

  push();
  translate(width / 2, height / 2);
  _.each(_.range(NUM_OBJ), id => drawObject(id));

  // fill(color(`rgb(255, 255, 255)`));
  // ellipse(0, 0, 77, 77);

  // Draw some circles
  // stroke(color(`hsba(${baseRingHue}, 100%, 70%, 0.6)`));
  // strokeWeight(1);
  // fill(color(`hsba(0, 0, 0, 0)`));
  // _.each(_.range(77 /  7), (thing) => {
  //   ellipse(0, 0, thing * 7, thing *  7);
  // });
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
  // objRotation = (objRotation + 0.5) % 360;

  // Update base ring brightness
  if (baseRingHue < BASE_RING_HUE.min || baseRingHue >= BASE_RING_HUE.max) {
    baseRingBrightnessDirection *= -1;
  }

  baseRingHue += baseRingBrightnessDirection * BASE_RING_HUE.rate;

  // Update object proportion
  if (objProportion < OBJ_PROPORTION.min || objProportion > OBJ_PROPORTION.max) {
    objProportionDirection *= -1;
  }

  objProportion += objProportionDirection * OBJ_PROPORTION.rate;
}

/******************************************************************************
 * utils
 /*****************************************************************************/

function drawObject(objId) {
  push();
  rotate(-1 * (objRotation + (objId / NUM_OBJ) * 60) * OBJ_ROTATION_RATE);
  scale(objSize * (OBJ_SCALE_RATE / 20));

  for (let ring = NUM_RINGS; ring > 0; ring--) {
    fill(getRingColor(objId))
    ellipse(
      0, 0,
      ring * (MAX_OBJ_SIZE / NUM_RINGS),
      ring * objProportion * (MAX_OBJ_SIZE / NUM_RINGS)
    );
  }

  fill(color(`rgba(255, 255, 255, 0.2)`));
  ellipse(0, 0, 12, 12);

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

function getRingColor(objId) {
  console.log(objId)
  return color(`hsba(${Math.round(360 * ((objId + 1.0) / NUM_OBJ))}, 100%, 90%, 0.2)`);
  // const amountToAdd = (ring / NUM_RINGS) * (90 - baseRingHue);
  // return color(0, 0, baseRingHue + amountToAdd);
}