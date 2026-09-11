let clickCount; // found this command in the "interactions" section of this weeks "review" page

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    background(210, 100, 100);
    angleMode(DEGREES);
    clickCount = 0;
}

function draw() {
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
    noloop();
}

function mousePressed() {
   if (clickCount === 0) {
        background(120, 55, 50);
        strokeWeight(5);
        stroke(120,50,90);
        fill(120, 70, 30);
        triangle(50, 750, 50, 120, 680, 750);
        push();
        strokeWeight(10);
        stroke(120, 40, 100);
        line(0, 0, 800, 800);
        pop();
        push();
        translate(400, 400);
        rotate(45);
        stroke(120, 100, 100);
        fill(120, 70, 65);
        rectMode(CENTER);
        rect(0, -230, 350, 350);
        pop();
        noloop();
        } 
    if (clickCount === 1) {
        background(0, 0, 100);
        noloop();
        }
}