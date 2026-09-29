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
  

  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutputSeed29.svg");
  }

  // Draw stuff here, such as:
     for(let i = 0; i < 8; i++) { 

      let n = noise(i * .9) * 130; // goal was to have concentric rectangles with some noise to affect the sizing so they all werent the same. Affects x axis only

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

