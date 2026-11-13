let video;
let handPose;
let hands = [];

// drum machine
let kick;
let snare;
let cymbal;
let hiHat;

let isKickPinched = [false, false];
let isSnarePinched = [false, false];
let isCymbalPinched = [false, false];
let isKeyPinched = [false, false];


let isKickHit = [false, false];
let isSnareHit = [false, false];
let isCymbalHit = [false, false];

let currentStep = 0;
let bpm = 120;
let stepInterval = (60 / bpm) * 500;
let lastStepTime = 0

let isPlaying = false;


// bass synth bottom right
// bass oscillator
let osc;
let playing = false;

let freqLo = 32
let freqHi = 65;

// keyed synth top right
let osc2;
let playing2 = false;

let freqLo2 = 15;
let freqHi2 = 150;

// frequencies array
let frequencies = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    349.23, // F4
    392.00, // G4
    440.00, // A4
    493.88, // B4
    523.25  // C5
];

// envelope 1
let env1;
// envelope 2
let env2;


// used some explanation from the LLM to get this part of the code to work
// I think I made this a pretty inconvenient way, I focused on making a grid first and needed help from there. I looked at other step sequencers people have made and most are simpler
let instrumentGrid = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
];

function drawGrid() {
    // divide screen into 16 sections across
    line(50, 400, 50, 600);
    line(100, 400, 100, 600);
    line(150, 400, 150, 600);
    line(200, 400, 200, 600);
    line(250, 400, 250, 600);
    line(300, 400, 300, 600);
    line(350, 400, 350, 600);
    line(400, 400, 400, 600);
    line(450, 400, 450, 600);
    line(500, 400, 500, 600);
    line(550, 400, 550, 600);
    line(600, 400, 600, 600);
    line(650, 400, 650, 600);
    line(700, 400, 700, 600);
    line(750, 400, 750, 600);
    line(800, 400, 800, 600);
    line(0, 500, 800, 500);
    line(0, 400, 800, 400);
    line(0, 450, 800, 450);
    line(0, 550, 800, 550);
}



async function setup() {
    createCanvas(800, 600);

    //bpm slider
    bpmSlider = createSlider(60, 280, bpm);
    bpmSlider.position(10, 10);
    bpmSlider.style('width', '200px');

    //read slider value in text
    bpmText = createP(bpm);
    bpmText.position(10, 40);

    // bass synth oscillator
    osc = new p5.Oscillator();
    osc.setType('sawtooth');
    osc.amp(.3);
    env1 = new p5.Envelope();
    env1.setADSR(0.001, 0.1, 0.5, 0.1);

    osc2 = new p5.Oscillator();
    osc2.setType('square');
    // osc2.amp(.4);
    env2 = new p5.Envelope();
    env2.setADSR(0.001, 0.05, 0.1, 0.9);

    


    colorMode(HSB);

    handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();

    handPose.detectStart(video, gotHands);

    kick = await loadSound('assets/kick5.mp3');
    snare = await loadSound('assets/snare.mp3');
    cymbal = await loadSound('assets/cymbal2.mp3');
    hiHat = await loadSound('assets/HiHat.mp3');
    // cymbal + hi hat are too loud
    cymbal.amp(.4);
    hiHat.amp(.4);
}

function draw() {
    bpm = bpmSlider.value();
    bpmText.html(bpm);
    stepInterval = (60 / bpm) * 500;


    if (isPlaying) {
        if (millis() - lastStepTime >= stepInterval) {
            lastStepTime = millis();
            currentStep = (currentStep + 1) % 16;
            // play sounds if step block is clicked
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

// bass synth

  
    image(video, 0, 0, width, height);
        

    background(180, 20, 60, .5);

    //rectangle behind grid
    fill(0, 0, 100, .5);
    rect(0, 400, width, 200);
    

    
   
// color in the click on blocks
    for (let i = 0; i < 4; i++) {
        for (let w = 0; w < 16; w++) {
            if (instrumentGrid[i][w]) {
                colorMode(HSB);
                fill(0 + i * 90, 100, 100);
                stroke(0);
                rect(w * 50, 400 + i * 50, 50, 50);
            }
        }
    }

    drawGrid();

    // line moving across screen
    let x = currentStep * 50;
    push();
    strokeWeight(2);
    colorMode(HSB);
    stroke(0, 0, 100);
    line(x, 400, x, 600);
    pop();
  
// split upper part of screen in half
push();
strokeWeight(3);
line(width/ 2, 0, width / 2, 400);
pop();

// split upper part into quads
push();
strokeWeight(3);
line(0, 200, width / 2, 200);
line(width / 2, 200, width, 200);
pop();

// bass synth quad
push();
noStroke();
fill(0, 50, 100, .3);
quad(width / 2, 200, width, 200, width, 400, width / 2, 400);
pop();

// upper right quadrant keys
push();
strokeWeight(2);
noFill();
for (let i = 0; i < 8; i++) {
        rect(width / 2 + i * 50, 0, 50, 200);
}
pop();



// bass synth here
// detect both hands
 for (let i = 0; i < hands.length; i++) {
        let fingerX = hands[i].index_finger_tip.x;
        let fingerY = hands[i].index_finger_tip.y;
        let thumbX = hands[i].thumb_tip.x;
        let thumbY = hands[i].thumb_tip.y;
        let middleX = hands[i].middle_finger_tip.x;
        let middleY = hands[i].middle_finger_tip.y;
        let ringX = hands[i].ring_finger_tip.x;
        let ringY = hands[i].ring_finger_tip.y;

        // if pointer + thumb touch on right half of screen
        if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX > width / 2 && fingerY > 200 && fingerY < 400){
            if (!isKickPinched[i]) {
                //play bass synth
                osc.start();
                env1.play(osc);
                
                isKickPinched[i] = true;
            }
                //control frequency with left to right
                let freqMap = map(fingerX, width / 2, width, freqLo, freqHi);
                osc.freq(freqMap, 0.05);
            
            // draw circle on finger
            push();
            noFill();
            strokeWeight(3);
            circle(fingerX, fingerY, 20);
            pop();
        } else {
            osc.stop();
            isKickPinched[i] = false;
        }

        // if pointer + thumb touch on top right
        if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX > width / 2 && fingerY < 200){
            if (!isSnarePinched[i]) {
                osc2.start();
                env2.play(osc2);
                
                osc2.amp(.15, 0);
                isSnarePinched[i] = true;
            }
            let keyIndex = floor(map(fingerX, width / 2, width, 0, frequencies.length));
            osc2.freq(frequencies[keyIndex], 0.05);

            push();
            noFill();
            strokeWeight(3);
            circle(fingerX, fingerY, 20);
            pop();
        } else {
            osc2.amp(0, 2);
            isSnarePinched[i] = false;
        }
 }

}

function mousePressed() {
    // click is within the grid area
    if (mouseX >= 0 && mouseX < width && mouseY >= 400 && mouseY < 600) {
        let col = floor(mouseX / 50);
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
