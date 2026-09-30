p5.disableFriendlyErrors = true; // keep warnings quiet

let seed = 29;

let bDoExportSvg = false; 

function setup(){
  createCanvas(576, 384); 
  angleMode(DEGREES);
  noFill();
  noiseSeed(seed);

}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){
  // first layer of my drawing, using this as a background layer essentually to go under the circles in my other sketch. Worked noise into the sizing to keep it organic looking

  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutputSeed29.svg");
  }

  // Draw stuff here, such as:
     for(let i = 0; i < 8; i++) { 

      let n = noise(i * .9) * 130; // goal was to have concentric rectangles with some noise to affect the sizing

      push()
      rectMode(CENTER);
      rect(288, 192, 60 + 60 * i + n, 40 + 40 * i);
      pop()
     }


  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}

