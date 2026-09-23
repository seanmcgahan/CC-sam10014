

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
}

function draw() {

//    if background
   if(mouseX < 800 && mouseX > 0 && mouseY > 0 && mouseY < 800) {
        background(0, 0, 100);
        stroke (0, 0, 0)
   }else{
        background(0, 0, 0);
        stroke(0, 0, 100)
   }

    //if background 2 (change background color for each vertical row across)
    if(mouseY > 50 && mouseY < 150 || mouseY > 250 && mouseY < 350 || mouseY > 450 && mouseY < 550 || mouseY > 650 && mouseY < 750) {
        background (0, 0, 0);
        stroke(0, 0 , 100)
    }


    

    // basic draw settings
    translate(400, 400);
    angleMode(DEGREES);
    strokeWeight(3);


    for(let i = 0; i < 11; i++) { // for loop (x axis)
        for(let w = 0; w < 11; w++) { // for loop (y axis)

        // color
        colorMode(HSB);
        fill(0, 0, w*50);



        //Draw Triangles set 1
        push()
        ellipse(i*100 - 400, 0, 75) // Middle Row
        ellipse(i*100 - 400,w*-100 - 100, 65 + w*-10) // Going up
        ellipse(i*100 - 400,w*100 + 100, 65 + w*-10) // Going down
        pop()

        }
    }
}
