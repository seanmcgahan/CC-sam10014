let x = 0;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(220);
    translate(400, 400);
    angleMode(DEGREES);
    rotate(45);

    for(let i = 0; i < 7; i++) { // for loop (x axis)
        for(let w = 0; w < 7; w++) { // for loop (y axis)

        // color
        colorMode(HSB);
        fill(360*(i*w/25), 100*(i*w/50), 100);


        // Draw squares
        rectMode(CENTER);
        rect(i*100 - 300, w*100 - 300,
            random(0, 40) + 50);
        noLoop();
        }
    }
}
