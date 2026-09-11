function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    background(210, 100, 100);
    angleMode(DEGREES);
}

function draw() {
    background(210, 100, 100);
    strokeWeight(5);
    triangle(50, 750, 50, 540, 260, 750);
    strokeWeight(10);
    line(0, 400, 400, 800);
    strokeWeight(5);
    push();
    translate(400, 400);
    rotate(45);
    rectMode(CENTER);
    rect(0, 0, 300, 300);
    pop();
    
}
