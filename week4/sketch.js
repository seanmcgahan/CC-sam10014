let bDoExportSvg = false;

function setup() {
    createCanvas(576, 384);
}

function keyPressed() {
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw() {
    background(240);

    if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }

  // Draw stuff here, such as:
 translate(288, 192);
    angleMode(DEGREES);
  


    for(let i = 0; i < 11; i++) { // for loop (x axis)
        for(let w = 0; w < 11; w++) { // for loop (y axis)



        //Draw Triangles set 1
        push()
        ellipse(i*100 - 288, 0, 75) // Middle Row
        ellipse(i*100 - 288,w*-100 - 100, 65 + w*-10) // Going up
        ellipse(i*100 - 288,w*100 + 100, 65 + w*-10) // Going down
        pop()
        }
      }

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}
