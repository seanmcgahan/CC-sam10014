function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    background(210, 100, 100);
    angleMode(DEGREES);
}

function draw() {
    background(210, 100, 100);
    strokeWeight(5);
    stroke(300,70,100);
    triangle(50, 750, 50, 540, 260, 750);
    push();
    strokeWeight(10);
    stroke(90, 50, 100);
    line(0, 400, 400, 800);
    pop();
    push();
    translate(400, 400);
    rotate(45);
    stroke(0, 0, 100);
    fill(300, 70, 100);
    rectMode(CENTER);
    rect(0, 0, 350, 350);
    pop();
}

function mousePressed() {
    background(0, 100, 100);
} 