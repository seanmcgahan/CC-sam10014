let pMapper; // mapper instance
let myQuad; // one face
let ballx;

function setup() {
    // p5.mapper needs WEBGL in createCanvas
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);

    // create one quad surface
    quad0 = pMapper.createQuadMap(400, 400);

    //create more quad surfaces
    quad1 = pMapper.createQuadMap(400, 400);
    quad2 = pMapper.createQuadMap(400, 400);
    quad3 = pMapper.createQuadMap(400, 400);
    quad4 = pMapper.createQuadMap(400, 400);
    quad5 = pMapper.createQuadMap(400, 400);
    quad6 = pMapper.createQuadMap(400, 400);


    // if you want to position items in your sketch
    // do so with the quad you're targeting
    ballx = quad0.width/2;
}

function draw() {

    background(0);
    //pass the name of a drawing function into displaySketch()
    //quad0.displaySketch(myDrawing);
    quad0.display(color('red'));
    quad1.display(color('cornflowerblue'));
    quad2.display(color('yellow'));
    quad3.display(color('yellowgreen'));
    quad4.display(color('hotpink'));
    quad5.display(color('aliceblue'));
    quad6.display(color('purple'));
}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function myDrawing(mySketch) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    mySketch.background("orange");
    mySketch.stroke(0);
    mySketch.strokeWeight(4);
    mySketch.line(0, 0, 400, 400); // diagonal line across the quad
    mySketch.noStroke();
    mySketch.fill(255);
    mySketch.ellipse(ballx, quad0.height/2, 150);
    ballx += 1;
    if(ballx>quad0.width+75)ballx=-75;
}
function keyPressed() {
    switch (key) {
        case "c":
            pMapper.toggleCalibration();
            break;
        case "f":
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case "l":
            pMapper.load("/Users/seanmcgahan/Downloads/map.json");
            break;
        case "s":
            pMapper.save("map.json");
            break;
    }
}