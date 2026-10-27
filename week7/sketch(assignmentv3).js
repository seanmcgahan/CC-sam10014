let pMapper; // mapper instance
let myQuad; // one face
let ballx;

function setup() {
    // p5.mapper needs WEBGL in createCanvas
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);

    // create one quad surface
    quad0 = pMapper.createQuadMap(350, 400);

    //create more quad surfaces
    quad1 = pMapper.createQuadMap(490, 400);
    quad2 = pMapper.createQuadMap(350, 400);
    quad3 = pMapper.createQuadMap(490, 400);
    quad4 = pMapper.createQuadMap(490, 400);
    quad5 = pMapper.createQuadMap(490, 400);
    quad6 = pMapper.createQuadMap(350, 400);


    // if you want to position items in your sketch
    // do so with the quad you're targeting
    ballx = quad0.width/2;
    rectx = quad5.width/2;
}

function draw() {

    background(0);
    //pass the name of a drawing function into displaySketch()
    //quad0.displaySketch(myDrawing);
    quad0.displaySketch(myDrawing0);
    quad1.displaySketch(myDrawing1);
    quad2.displaySketch(myDrawing2);
    quad3.displaySketch(myDrawing3);
    quad4.displaySketch(myDrawing4);
    quad5.displaySketch(myDrawing5);
    quad6.displaySketch(myDrawing6);
}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function myDrawing6(mySketch6) {
    // anything drawn on this surface needs 'mySketch6.' in front of it
    mySketch6.background("pink");
    mySketch6.noStroke();
    colorMode(HSB);
    for (let i = 0; i < 4; i++) {
        mySketch6.fill(i * 100, 100, 100);
        mySketch6.ellipse(ballx + 50*i, 150* i, 150);
    }
    ballx += 50;
    if(ballx>quad0.width+75)ballx=-75;
}

function myDrawing5(mySketch5) {
    // anything drawn on this surface needs 'mySketch5.' in front of it
    let size = 10 + frameCount % 360;
    mySketch5.colorMode(HSB);
    mySketch5.background(0 + frameCount % 360, 100, 100);
    mySketch5.stroke(0);
    mySketch5.strokeWeight(4);
    mySketch5.noStroke();
    for (let i = 0; i < 5; i++) {
        mySketch5.fill(180 + i * 20 + frameCount % 360, 100, 100);
        mySketch5.rect(rectx + i * 50, 100, size, -100 + i*200);
    }
    rectx += 4;
    if(rectx>quad5.width+75)rectx=-75;
}

function myDrawing4(mySketch4) {
    // anything drawn on this surface needs 'mySketch4.' in front of it
    mySketch4.colorMode(HSB);
    if (frameCount % 8 === 0) {
        mySketch4.background(0, 100, 100);
    } else {
        mySketch4.background(90, 100, 100);
    }
    mySketch4.rectMode(CENTER);
    mySketch4.fill(0, 0, 0);
    mySketch4.rect(245, 200, 100, 100);
}

function myDrawing3(mySketch3) {
    // anything drawn on this surface needs 'mySketch3.' in front of it
    mySketch3.colorMode(HSB);
    mySketch3.background(0, 0, 0);
    if (frameCount % 2 === 0) {
        mySketch3.stroke(200, 100, 100);
    } else {
        mySketch3.stroke(200, 0, 100);
    }
    mySketch3.noFill();
    for (let i = 0; i < 30; i++) {
        mySketch3.ellipse(245, 200, i * 20 + 10, i * 20 + 10);
    }
}

function myDrawing2(mySketch2) {
    // anything drawn on this surface needs 'mySketch2.' in front of it
    mySketch2.colorMode(HSB);
    mySketch2.background(frameCount % 360, 100, 100);
    mySketch2.angleMode(DEGREES);
    mySketch2.push();
    mySketch2.translate(175, 200);
    mySketch2.rotate(frameCount % 180);
    mySketch2.rectMode(CENTER);
    mySketch2.rect(0, 0, 100, 100);
    mySketch2.pop();
}

function myDrawing1(mySketch1) {
    // anything drawn on this surface needs 'mySketch1.' in front of it
    mySketch1.colorMode(HSB);
    mySketch1.background(0, 100, 100);
    mySketch1.fill(180, 100, 100);
    mySketch1.triangle(0, 0, 245, 400, 490, 0);
}

function myDrawing0(mySketch0) {
    // anything drawn on this surface needs 'mySketch0.' in front of it
    mySketch0.colorMode(HSB);
    mySketch0.background(180, 50, 100);
    mySketch0.stroke(100, 100, 100);
    mySketch0.translate(-25, 0);
    mySketch0.fill(0, 100, 100);
    mySketch0.rect(50, 50, 100, 100);
    mySketch0.fill(50, 100, 100);
    mySketch0.rect(250, 250, 100, 100);
    mySketch0.fill(340, 100, 100);
    mySketch0.rect(50, 250, 100, 100);
    mySketch0.fill(20, 100, 100);
    mySketch0.rect(250, 50, 100, 100);
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