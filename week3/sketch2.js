
let g = 40
let h = 0
let q = -40

function setup() {
    createCanvas(800, 800);
    colorMode(HSB)
}

function draw() {

//    if background
   if(mouseX < 800 && mouseX > 0 && mouseY > 0 && mouseY < 800) {
        background(40, 50, 90);
   }else{
        background(0, 25, 100);
   }

    //if background 2
    if(mouseX > 50 && mouseX < 150 || mouseX > 250 && mouseX < 350 || mouseX > 450 && mouseX < 550 || mouseX > 650 && mouseX < 750) {
        background (200, 25, 100)
    }

    push()
    if(mouseX < 0 || mouseX > 50 && mouseX < 150 || mouseX > 250 && mouseX < 350 || mouseX > 450 && mouseX < 550 || mouseX > 650 && mouseX < 750 || mouseX > 800) {
        g = -40;
    }else{
        g = 40;
    }
    pop()


    //if statement set up

    // push()
    // if(mouseX < 800 && mouseX > 0 && mouseY > 0 && mouseY < 800) {
    //     g = -40;
    // }else{
    //     g = 40;
    // }
    // pop()

    //flip triangle
    

    // basic draw settings
    translate(400, 400);
    angleMode(DEGREES);
    strokeWeight(2);
    // noStroke()


    
    // if rotation
    //if(mouseX > 400) {
        //rotate(-45);
    //}
    //else{
        //rotate(135)
    //}

    for(let i = 0; i < 11; i++) { // for loop (x axis)
        for(let w = 0; w < 11; w++) { // for loop (y axis)

        // color
        colorMode(HSB);
        fill(360*(i*w/25), 100*(i*w/50), 100);

        // if stroke
        // strokeWeight(2)
        // if(mouseY < 400) {
        //     stroke(0, 0, 0);
        // }
        // else{
        //     noStroke()
        // }

        rotate(0)

        //Draw Triangles
        push()
        fill(0, 0, 100)
        translate(-400 , -350)
        triangle(i*200, w*75 + g, i*200 + g, w*75 + 0, i*200 - g, w*75 + 0)
        pop()

        push()
        translate(-300, -350)
        triangle(-g + i*200, w*75 + 0, g + i*200, w*75 + 0, i*200 + 0, -g + w*75)
        pop()
        // Draw squares
        //rectMode(CENTER);
        //rect(i*100 - 300, w*100 - 300,
            //i*w*1.2 + 50);

        }
    }
}
