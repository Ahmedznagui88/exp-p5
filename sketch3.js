let nb = 20;
let dim = 0;
let x,y;
let margin = 10;


function setup(){
    createCanvas(500, 500);
    dim = (width - 2 * margin) / nb;
    noLoop();
    
    
}

function draw(){
    background(255);
    for (let j = 0; j < nb; j += 1) {
        for (let i = 0; i < nb; i += 1) {
            x = margin + i * dim;
            y = margin + j * dim;
        noFill();
        //stroke(220);
        //rect(x,y, dim, dim)
        stroke(1);
        strokeWeight(3);
            let rnd = int(random(0, 4));
            if (rnd == 1) {
                line(x, y, x + dim, y + dim);
            } else if (rnd == 2) {
                line(x, y + dim, x + dim, y);
            } else if (rnd == 3) {
                line(x, y, x + dim, y);
            } else {
                line(x, y, x, y + dim);
            }
        }
        
    }
    
}
function keyPressed(){
    redraw()
}