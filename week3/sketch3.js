
let g = 40;

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
}

function draw() {

//    if background 1 (red background when outside of the canvas)
   if(mouseX < 800 && mouseX > 0 && mouseY > 0 && mouseY < 800) {
        background(40, 50, 90);
   }else{
        background(0, 25, 100);
   }

    //if background 2 (change background color for each vertical row across)
    if(mouseX > 50 && mouseX < 150 || mouseX > 250 && mouseX < 350 || mouseX > 450 && mouseX < 550 || mouseX > 650 && mouseX < 750) {
        background (200, 25, 100);
    }

    // flip triangles when scrolling across
    push()
    if(mouseX < 0 || mouseX > 50 && mouseX < 150 || mouseX > 250 && mouseX < 350 || mouseX > 450 && mouseX < 550 || mouseX > 650 && mouseX < 750 || mouseX > 800) {
        g = -40;
    }else{
        g = 40;
    }
    pop()

    

    // basic draw settings
    translate(400, 400);
    angleMode(DEGREES);
    strokeWeight(2);


    for(let i = 0; i < 11; i++) { // for loop (x axis)
        for(let w = 0; w < 11; w++) { // for loop (y axis)

        // color
        colorMode(HSB);
        fill(360*(w*2/25), 100*(w*2/50) + 25, 100);



        //Draw Triangles set 1
        push()
        fill(0, 0, 100);
        translate(-400 , -350);
        triangle(i*200, w*75 + g, i*200 + g, w*75 + 0, i*200 - g, w*75 + 0);
        pop()


        // Draw Triangles set 2
        push()
        translate(-300, -350);
        triangle(-g + i*200, w*75 + 0, g + i*200, w*75 + 0, i*200 + 0, -g + w*75);
        pop()

        }
    }
}
