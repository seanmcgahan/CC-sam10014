let video;
// let handPose;
// let hands = [];


let kick;
let snare;
let cymbal;
let hiHat;

// let isKickPinched = [false, false];
// let isSnarePinched = [false, false];
// let isCymbalPinched = [false, false];

let isKickHit = [false, false];
let isSnareHit = [false, false];
let isCymbalHit = [false, false];

let currentStep = 0;
let bpm = 300;
let stepInterval = (60 / bpm) * 1000;
let lastStepTime = 0

let isPlaying = false;


let instrumentGrid = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]
];

function drawGrid() {
    // divide screen into 8 sections across
    line(100, 400, 100, 600);
    line(200, 400, 200, 600);
    line(300, 400, 300, 600);
    line(400, 400, 400, 600);
    line(500, 400, 500, 600);
    line(600, 400, 600, 600);
    line(700, 400, 700, 600);
    line(800, 400, 800, 600);
    line(0, 500, 800, 500);
    line(0, 400, 800, 400);
    line(0, 450, 800, 450);
    line(0, 550, 800, 550);
}



async function setup() {
    createCanvas(800, 600);

    colorMode(HSB);

    // handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();

    // handPose.detectStart(video, gotHands);

    kick = await loadSound('assets/kick5.mp3');
    snare = await loadSound('assets/snare.mp3');
    cymbal = await loadSound('assets/cymbal2.mp3');
    hiHat = await loadSound('assets/HiHat.mp3');
    // cymbal + hi hat are too loud
    cymbal.amp(.4);
    hiHat.amp(.4);
}

function draw() {
    if (isPlaying) {
        if (millis() - lastStepTime >= stepInterval) {
            lastStepTime = millis();
            currentStep = (currentStep + 1) % 8;
            // play sounds if active
            if (instrumentGrid[0][currentStep]) {
                kick.play();
            }
            if (instrumentGrid[1][currentStep]) {
                snare.play();
            }
            if (instrumentGrid[2][currentStep]) {
                cymbal.play();
            }
            if (instrumentGrid[3][currentStep]) {
                hiHat.play();
            }
        }
    }

  
    image(video, 0, 0, width, height);
        

    background(180, 20, 60, .5);

    //rectangle behind grid
    fill(0, 0, 100, .5);
    rect(0, 400, width, 200);
    

    
   
// Render active filled blocks
    for (let i = 0; i < 4; i++) {
        for (let w = 0; w < 8; w++) {
            if (instrumentGrid[i][w]) {
                colorMode(HSB);
                fill(0 + i * 90, 100, 100);
                stroke(0);
                rect(w * 100, 400 + i * 50, 100, 50);
            }
        }
    }

    drawGrid();

    // line moving across screen
    let x = currentStep * 100;
    push();
    strokeWeight(2);
    colorMode(HSB);
    stroke(0, 100, 100);
    line(x, 400, x, 600);
    pop();
  



}

function mousePressed() {
    // click is within the grid area
    if (mouseX >= 0 && mouseX < width && mouseY >= 400 && mouseY < 600) {
        let col = floor(mouseX / 100);
        let row = floor((mouseY - 400) / 50);

        // Toggle the clicked block on/off
        if (instrumentGrid[row][col] === true) {
            instrumentGrid[row][col] = false; // Turn block off
        } else {
            instrumentGrid[row][col] = true;  // Turn block on
        }
    }
}


function gotHands(results) {
    hands = results;
}

function keyPressed() {
    if (key === ' ') {
        if (!isPlaying) {
            isPlaying = true;
            lastStepTime = millis();
        } else {
            isPlaying = false;
        }
    }
}
