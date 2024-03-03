let nb = 30;
let rot = 3;
let dim = 350;
let f = 1;
let fmin= 0.5;


let sliderNb, sliderRot;

function setup(){
    createCanvas(500, 500)
    rectMode(CENTER)
    angleMode(DEGREES)
    sliderNb = createSlider(1, 50, nb, 1)
    sliderRot = createSlider(0, 180, rot);
}

function draw(){
    nb = sliderNb.value()
    rot = sliderRot.value()

    background(0)
    stroke(255)
    noFill();
    translate(width/2, height/2);
    for(let i = 0; i < nb; i+=1){
        f = map(i, 0, nb-1, 1,fmin)
        square(0, 0, f * dim)
        rotate(rot);
    }
}

/* function keyPressed(){
    if(keyCode === ENTER){
        nb += 1
    }
} */




