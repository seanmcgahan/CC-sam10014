p5.disableFriendlyErrors = true; // keep warnings quiet


let bDoExportSvg = false; 


function setup(){
  createCanvas(576, 384); 
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}


function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutputv2.svg");
  }

// test draw
//ellipse(200, 100, 100)


  // Draw stuff here, such as
  for(let i = 0; i < 3; i++) { // for loop (x axis)
        for(let w = 0; w < 11; w++) { // for loop (y axis)



        //Draw Triangles set 1
        push()
        ellipse(i*70 + 75, 192, 60,) // Middle Row
        ellipse(i*70 + 75,w*-50 + 130, 50 + w*-10) // Going up
        ellipse(i*70 + 75,w*50 + 255, 50 + w*-10) // Going up

        pop()

        }
    }

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}