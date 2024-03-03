let nb = 30;
let dim = 0;
let x, y;
let margin = 10;

function setup() {
  createCanvas(500, 500);
  dim = (width - 2 * margin) / nb;
  noLoop();
}

function draw() {
  background(215);
  for (let j = 0; j < nb; j += 1) {
    for (let i = 0; i < nb; i += 1) {
      x = margin + i * dim;
      y = margin + j * dim;
      noFill();
      //stroke(220);
      //rect(x,y, dim, dim)
      noStroke();
      fill(0);
      let rnd = int(random(0, 4));
      if (rnd == 0) {
        fill(random(255), random(255), random(255));
        triangle(x + dim, y, x + dim, y + dim, x, y + dim);
      } else if (rnd == 2) {
          fill(255, 120, 34);
        triangle(x, y, x + dim, y, x, y + dim);
      } else if (rnd == 3) {
        triangle(x, y, x +dim, y+dim, x, y+dim);
      } else {
        fill(random(155), random(25), random(55));
        triangle(x, y, x+dim, y, x+dim , y+dim);
      }
    }
  }
}
function keyPressed() {
  redraw();
}
