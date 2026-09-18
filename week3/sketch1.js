let x = 0;
//let rectSize;

function setup() {
    createCanvas(800, 800);
    //rectSize = random(0,40); //assigning random square size
    colorMode(HSB)
}

function draw() {
    background(0, 0, 90);
    
    //if statement set up


    // basic draw settings
    translate(400, 400);
    angleMode(DEGREES);

    // if rotation
    if(mouseX > 400) {
        rotate(-45);
    }
    else{
        rotate(135)
    }

    for(let i = 0; i < 7; i++) { // for loop (x axis)
        for(let w = 0; w < 7; w++) { // for loop (y axis)

        // color
        colorMode(HSB);
        fill(360*(i*w/25), 100*(i*w/50), 100);

        // if stroke
        strokeWeight(2)
        if(mouseY < 400) {
            stroke(0, 0, 0);
        }
        else{
            noStroke()
        }

        

        // Draw squares
        rectMode(CENTER);
        rect(i*100 - 300, w*100 - 300,
            i*w*1.2 + 50);

        }
    }
}
