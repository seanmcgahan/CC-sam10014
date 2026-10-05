p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 

function setup(){
  createCanvas(576, 384); 
  stroke(0);
  noFill(0);
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutput4.svg");
  }

  // Draw stuff here, such as:
  // modified my 3rd drawing from last week to fit into this format
 for(let i = 0; i < 12; i++) { // for loop (x axis)

  ellipse(i*50 - 4+ 0, 192, 60, 60); // Middle Row

        for(let w = 0; w < 3; w++) { // for loop (y axis)



        //Draw circles
        push()
        ellipse(i*50 - 4,w*-50 + 130, 50 + w*-10, 50 + w*-10); // Going up
        ellipse(i*50 - 4,w*50 + 255, 50 + w*-10, 50 + w*-10); // Going down

        pop()

        }
    }

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}