function setup() {
    createCanvas(576, 384);
}

function keyPressed() {
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw() {
    background(205);

    if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  // Draw stuff here, such as:
 ellipse(200, 200, 50); 

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}
