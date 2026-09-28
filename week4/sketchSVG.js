p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 

function setup(){
  createCanvas(576, 384); 
  angleMode(DEGREES);
  noFill();

}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){

  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  // Draw stuff here, such as:
     for(let i = 0; i < 10; i++) { 

      push()
      rectMode(CENTER);
      rect(288, 192, 60 * i, 40 * i);
      pop()
     }


  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}

