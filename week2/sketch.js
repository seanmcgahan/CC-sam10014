let clickCount; // found this command in the "interactions" page in the review section for week 2

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    background(210, 100, 100);
    angleMode(DEGREES);
    clickCount = 0;
}

function draw() {
    if (clickCount === 0) { // learned about "if" statements and their syntax on the p5.js library page
        strokeWeight(5);
        stroke(210,40,100);
        triangle(50, 750, 50, 540, 260, 750);
        push();
        strokeWeight(10);
        stroke(210, 100, 50);
        line(0, 400, 400, 800);
        pop();
        push();
        translate(400, 400);
        rotate(45);
        stroke(0, 0, 100);
        fill(210, 55, 100);
        rectMode(CENTER);
        rect(0, 0, 350, 350);
        pop();
        } else if (clickCount === 1) { // learned how to get if/else if to work through reading p5.js library and some trial and error
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
        } else if (clickCount === 2) {
            background(40, 100, 100);
            strokeWeight(5);
            stroke(40, 50, 90);
            fill(40, 70, 30);
            triangle(750, 50, 120, 50, 750, 680);
            push();
            strokeWeight(10);
            stroke(40, 40, 100);
            line(0, 800, 800, 0);
            pop();
            push();
            translate(400, 400);
            rotate(45);
            stroke(40, 70, 30);
            fill(40, 70, 65);
            rectMode(CENTER);
            rect(0, 230, 250, 250);
            pop();
        } else if (clickCount === 3) {
            background(0, 0, 50); 
            push(); // added push and pop to triangle here
            strokeWeight(5);
            stroke(0, 0, 70);
            fill(0, 0, 30);
            triangle(750, 400, 450, 700, 450, 100);
            pop();
            push();
            strokeWeight(10);
            stroke(0 , 0, 0);
            line(400, 800, 400, 0);
            pop();
            push();
            translate(200, 400); //translated origin to move the rectangle here before rotating to make positioning easier
            rotate(45);
            stroke(0, 0, 30);
            fill(0, 0, 85);
            rectMode(CENTER);
            rect(0, 0, 250, 250);
            pop();
        } else if (clickCount === 4) {
            background(290, 40, 70);
            push();
            strokeWeight(5);
            stroke(290,60, 30);
            fill(290, 30, 90);
            triangle(50, 400, 450, 800, 450, 0);
            pop();
            push();
            strokeWeight(10);
            stroke(0 , 0, 100);
            line(600, 800, 600, 0);
            pop();
            push();
            translate(200, 400); 
            rotate(45);
            stroke(0, 0, 100);
            fill(290, 60, 30);
            rectMode(CENTER);
            rect(0, 0, 150, 150);
            pop();
        } else if (clickCount === 5) {
            background(0, 50, 100);
            push();
            strokeWeight(5);
            stroke(0, 0, 100);
            fill(0, 30, 100);
            triangle (400, 800, 50, 450, 750, 450);
            pop();
            push();
            strokeWeight(10);
            stroke(0 , 0, 100);
            line(0, 400, 800, 400);
            pop();
            push();
            translate(400, 400); //moved origin back to center of canvas
            rotate(0);
            stroke(0, 0, 100);
            fill(0, 30, 100);
            rectMode(CENTER);
            rect(0, -200, 300, 300);
            pop();
        }
        
}


function mousePressed() {
    clickCount += 1; // found this command under "interactions" in the review section for week 2. Using it to add 1 click to the clickcount
}