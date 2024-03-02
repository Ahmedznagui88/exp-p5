
function setup(){
    createCanvas(500, 500)
    
}

function draw(){
    background(0);
    noStroke();
    fill(255);
    for(let i = 0; i < 5; i+=1){
        circle(50 + i * 100, 250, 100)
    }
 
}