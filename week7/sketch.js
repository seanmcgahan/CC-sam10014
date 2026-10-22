let pMapper; // mapper instance
let myQuad; // one face
let myQuad2; // second face
let myQuad3; // third face
let ballx;
let spheres = [];
let numspheres = 80;
let bally;
let noise;
let x1;

class Ball {

  constructor(mySize) {
    this.diam = mySize;

    // Random color
    this.col = color(
      random(255),
      random(255),
      random(255),
      random(255)
    );

    // Random position inside the quad
    this.xpos = random(
      this.diam / 2,
      myQuad.width - this.diam / 2
    );

    this.ypos = random(
      this.diam / 2,
      myQuad.height - this.diam / 2
    );

    // Random speed
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
  }

  // Update ball position
  update() {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
  }

  // Check wall collisions
  wallCheck() {

    // Left and right walls
    if (
      this.xpos >= myQuad.width - this.diam / 2 ||
      this.xpos <= this.diam / 2
    ) {
      this.xspeed *= -1;

      this.xpos = constrain(
        this.xpos,
        this.diam / 2,
        myQuad.width - this.diam / 2
      );
    }

    // Top and bottom walls
    if (
      this.ypos >= myQuad.height - this.diam / 2 ||
      this.ypos <= this.diam / 2
    ) {
      this.yspeed *= -1;

      this.ypos = constrain(
        this.ypos,
        this.diam / 2,
        myQuad.height - this.diam / 2
      );
    }
  }

  // Draw ball on the quad
  render(mySketch) {
    mySketch.noStroke();
    mySketch.fill(this.col);

    mySketch.ellipse(
      this.xpos,
      this.ypos,
      this.diam
    );
  }
}

function setup() {
    // p5.mapper needs WEBGL in createCanvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    // create the mapper
    pMapper = createProjectionMapper(this);
    // create one quad surface
    myQuad = pMapper.createQuadMap(400, 400);
    // if you want to position items in your sketch
    // do so with the quad you're targeting
    myQuad2 = pMapper.createQuadMap(400, 400);
    myQuad3 = pMapper.createQuadMap(400, 400);
    ballx = myQuad.width/2;
    rectx = myQuad.width/2;

      for (let i = 0; i < numspheres; i++) {
    spheres.push(new Ball(1 + i));
     bally = myQuad.width/2;
  }
}

function draw() {
    background(0);
    //pass the name of a drawing function into displaySketch()
    myQuad.displaySketch(ZiyanDraw);
    myQuad2.displaySketch(myDrawing2);
     myQuad3.displaySketch(myDrawing1);
}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function ZiyanDraw(mySketch) {

  // Pink to blue gradient
  let pink = mySketch.color(255, 182, 210);
  let blue = mySketch.color(150, 200, 255);

  // Draw gradient background
  for (let y = 0; y < myQuad.height; y++) {

    let t = y / myQuad.height;

    let c = mySketch.lerpColor(pink, blue, t);

    mySketch.stroke(c);
    mySketch.line(0, y, myQuad.width, y);
  }

  // Update and draw balls
  for (let i = 0; i < spheres.length; i++) {

    spheres[i].update();

    spheres[i].wallCheck();

    spheres[i].render(mySketch);
  }
}


function myDrawing1(mySketch3) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    mySketch3.background("blue");
    mySketch3.stroke(0);
    mySketch3.strokeWeight(4);
    mySketch3.line(0, 0, 400, 400); // diagonal line across the quad
    mySketch3.noStroke();
    // mySketch3.fill(noise(map(offset)(255)));
    mySketch3.ellipse(bally, myQuad.height/2, 150);
    //  x1 = noise(map(offset*uniqueAngel*s) * width);
    bally += 1;
    if(bally>myQuad.width+75)bally=-75;
}

function myDrawing2(mySketch2) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    let size = 10 + frameCount % 360;
    mySketch2.colorMode(HSB);
    mySketch2.background(0 + frameCount % 360, 100, 100);
    mySketch2.stroke(0);
    mySketch2.strokeWeight(4);
    mySketch2.noStroke();
    for (let i = 0; i < 5; i++) {
        mySketch2.fill(180 + i * 20 + frameCount % 360, 100, 100);
        mySketch2.rect(rectx + i * 50, 100, size, -100 + i*200);
    }
    rectx += 4;
    if(ballx>myQuad2.width+75)ballx=-75;
    if(rectx>myQuad2.width+75)rectx=-75;
}

function keyPressed() {
    if (key === "c") {
        pMapper.toggleCalibration();
    }
    if (key === "f") {
        let fs = fullscreen();
        fullscreen(!fs);
    }
    if (key === "s") {
        pMapper.save("map.json");
    }
    if (key === "l") {
        pMapper.load("maps/map.json");
    }
}