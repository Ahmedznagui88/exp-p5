//!bruno munari
/* 
let yMouth = 375; //mouth position
let dEyes = 30; //eyes position
let yEyes = 150; // eyes size
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES); //!angleMode prende solo un parametro
}
function draw() {
  background(220);

  //rect rosso
  fill('#EE4266')
  rect(50, 50, 200, 400);
  fill('#0C2D57')
  rect(250, 50, 200, 200);
  fill('#FDBF60')
  rect(250, 250, 200, 200);
  fill('#7ED7C1')
  rect(250, 250, 100, 100);
  rect(350, 350, 100, 100);

  strokeWeight(4);
  stroke(0);
  //vertical line
  line(50, 50, 50, 450);
  line(150, 50, 150, 450);
  line(250, 50, 250, 450);
  line(350, 50, 350, 450);
  line(450, 50, 450, 450);
  //horizontal line
  line(50, 50, 450, 50);
  line(50, 150, 450, 150);
  line(50, 250, 450, 250);
  line(50, 350, 450, 350);
  line(50, 450, 450, 450);

  //left eyebrow
  line(50, 150, 150, 50);  
  line(150, 50, 250, 150);
  //right eyebrow
  line(250, 150, 350, 50);
  line(350, 50, 450, 150);

  //nose
  line(150, 250, 250, 350);
  line(250, 350, 350, 250);

  //mouth
  line(150, yMouth, 350, yMouth);

  //eyes
  fill(0)
  noStroke();
  ellipse(150, yEyes, dEyes, dEyes);
  ellipse(350, yEyes, dEyes, dEyes);
}
function keyPressed(){
  console.log("keyPressed")
  save('face_bruno_marini.png')
} */

//!square/circle/square
/* function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill(0);
  noStroke();
  if(mouseX < width/3){
    rectMode(CENTER)
    square(width/2, height/2, 400);
  }else if(mouseX < 2*width/3){
    circle(width/2, height/2, 400);
  }else{
    triangle(250, 50, 450, 450, 50, 450)
  }

} */


function setup() {
  createCanvas(1500, 1500);
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255))
  stroke(255);
  strokeWeight(2);
  myPattern(mouseX, mouseY, 50, 50);

}

/* function keyPressed(){
  console.log("keyPressed")
  save('square.png')
} */

function myPattern(x, y, d, amp) 
{
  beginShape();
  vertex(x - d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); // 0
  vertex(x + d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); // 1
  vertex(x + d / 2 + random(-amp, amp), y + d / 2+ random(-amp, amp)); // 2
  vertex(x - d / 2 + random(-amp, amp), y + d / 2+ random(-amp, amp)); // 3
  endShape(CLOSE);
}