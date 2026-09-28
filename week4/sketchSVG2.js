p5.disableFriendlyErrors = true; // keep warnings quiet

let seed = 1234;

let bDoExportSvg = false; 


function setup(){
  createCanvas(576, 384); 
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function drawRectangle (x, y, rot) {

}

function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg("myOutputv2.svg");
  }

  // Draw stuff here, such as
function draw() {
  background(245);

  let noiseScale = 0.01; // Smaller number = smoother wave

  for (let x = 30; x <= width - 30; x += 10) {
    // Calculate length based on noise
    let len = noise(x * noiseScale) * (height * 0.6);

    // Center lines vertically on the canvas
    let y1 = height / 2 - len / 2;
    let y2 = height / 2 + len / 2;

    line(x, y1, x, y2);
  }
}

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}