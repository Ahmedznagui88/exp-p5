let nb = 20;
let dim = 0;

let margin = 50;

let frequence = -5.1;
let f = 0.25;
let x, y;

function setup() {
  createCanvas(700, 700);
  dim = (width - 2 * margin) / nb;
  angleMode(DEGREES);
}

function draw() {
  background(20);
  //noStroke();
  fill(255);
  //stroke(255);
  //noFill();
  rectMode(CENTER);
  for (let j = 0; j < nb; j += 1) {
    for (let i = 0; i < nb; i += 1) {
      x = margin + dim / 2 + i * dim;
      y = margin + dim / 2 + j * dim;
      f = sin(frequence * frameCount + 8.2 * dist(mouseX, mouseY, x, y));
      circle(x, y, f * dim);
      //rect(x, y, f * dim);
    }
  }
}
