// LEWY PRZYCISK MYSZU - RYSOWANIE W OKNIE
// SPACJA - MNOŻENIE MACIERZ*WEKTOR

var imgA;
var imgB;

function setup() {
    createCanvas(512,512);
    background(255);  
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(var i=0; i<512*512*4*d; i+=4) {
      imgA.pixels[i]=240;
      imgA.pixels[i+1]=250;
      imgA.pixels[i+2]=240;
      imgA.pixels[i+3]=255;
      imgB.pixels[i]=240;
      imgB.pixels[i+1]=240;
      imgB.pixels[i+2]=250;
      imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}

function draw() {
    if (!keyIsDown(32)) {
      image(imgA,0,0);
      text('Image A',10,20);
    } else {
      image(imgB,0,0);
      text('Image B',10,20);
    }
}

function makeVector(x, y) {
  return [x, y, 1];
}

function drawVector(img, vec) {
  let x = Math.round(vec[0]);
  let y = Math.round(vec[1]);
  if (x >= 0 && x < img.width && y >= 0 && y < img.height) {
    img.set(x, y, [0, 0, 0, 255]);
    img.updatePixels();
  }
}

function multiplyMatrixVector(m, v) {
  return [
    m[0][0]*v[0] + m[0][1]*v[1] + m[0][2]*v[2],
    m[1][0]*v[0] + m[1][1]*v[1] + m[1][2]*v[2],
    m[2][0]*v[0] + m[2][1]*v[1] + m[2][2]*v[2]
  ];
}

function multiplyMatrices(A, B) {
  let result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = [];
    for (let j = 0; j < 3; j++) {
      result[i][j] =
        A[i][0] * B[0][j] +
        A[i][1] * B[1][j] +
        A[i][2] * B[2][j];
    }
  }
  return result;
}

function makeIdentity() {
  return [
    [1,0,0],
    [0,1,0],
    [0,0,1]
  ];
}

function makeTranslate(tx, ty) {
  return [
    [1,0,tx],
    [0,1,ty],
    [0,0,1]
  ];
}

function makeScale(sx, sy) {
  return [
    [sx,0,0],
    [0,sy,0],
    [0,0,1]
  ];
}

function makeRotation(theta) {
  return [
    [Math.cos(theta), -Math.sin(theta), 0],
    [Math.sin(theta),  Math.cos(theta), 0],
    [0,0,1]
  ];
}

function makeShear(shx, shy) {
  return [
    [1, shx, 0],
    [shy, 1, 0],
    [0, 0, 1]
  ];
}

var T = makeTranslate(80, 50);
var R = makeRotation(25 * Math.PI / 180);
var S = makeScale(1.4, 1.4);

var M1 = multiplyMatrices(T, multiplyMatrices(R, S));
var M2 = multiplyMatrices(S, multiplyMatrices(T, R));

function mouseDragged() {
  let v = makeVector(mouseX, mouseY);
  drawVector(imgA, v);
  let w2 = multiplyMatrixVector(M2, v);
  drawVector(imgB, w2);
}
