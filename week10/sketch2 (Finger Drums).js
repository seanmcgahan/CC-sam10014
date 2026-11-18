let video;
let handPose;
let hands = [];


let kick;
let snare;
let cymbal;
let hiHat;
let cowBell;
let percussion6;

let isKickPinched = [false, false];
let isSnarePinched = [false, false];
let isCymbalPinched = [false, false];
let isHiHatPinched = [false, false];
let isCowBellPinched = [false, false];
let isPercussion6Pinched = [false, false];

// rectangle visuals
let RightColor = 0;
let LeftColor = 180;
let showRectangle1 = false;
let showRectangle2 = false;
let showRectangle3 = false;
let showRectangle4 = false;
let showRectangle5 = false;
let showRectangle6 = false;

// fft
let fft;

async function setup() {
    createCanvas(800, 600);

    handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();

    handPose.detectStart(video, gotHands);

    kick = await loadSound('assets/kick5.mp3');
    snare = await loadSound('assets/snare.mp3');
    cymbal = await loadSound('assets/cymbal2.mp3');
    hiHat = await loadSound('assets/HiHat.mp3');
    cowBell = await loadSound('assets/cowbell.mp3');
    percussion6 = await loadSound('assets/percussion.mp3');
    cymbal.amp(.4);
    hiHat.amp(.4);
    cowBell.amp(.8);
    percussion6.amp(.6);
    
    // fft visuals
    fft = new p5.FFT(32);
    kick.connect(fft);
    snare.connect(fft);
    cymbal.connect(fft);
    hiHat.connect(fft);
    cowBell.connect(fft);
    percussion6.connect(fft);
}
// fill right half of screen with rectangle
function drawRightHalfRect() {
    push();
    colorMode(HSB);
    fill(RightColor, 100, 100, .2);
    noStroke();
    rect(width / 2, 0, width / 2, height);
    pop();
}
// fill left half of screen with rectangle
function drawLeftHalfRect() {
    push();
    colorMode(HSB);
    fill(LeftColor, 100, 100, .2);
    noStroke();
    rect(0, 0, width / 2, height);
    pop();
}

function draw() {
    // background(220);
    image(video, 0, 0, width, height);
    showRectangle1 = false;
    showRectangle2 = false;
    showRectangle3 = false;
    showRectangle4 = false;
    showRectangle5 = false;
    showRectangle6 = false;

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


        // play drum samples when fingers touch together
            // if pointer + thumb touch on right half of screen
            if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX > width / 2){
                showRectangle1 = true;
                if (!isKickPinched[i]) {
                    kick.play();
                    isKickPinched[i] = true;
                }
            } else {
                isKickPinched[i] = false;
            }

            // if pointer + thumb touch on left half of screen
            if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX < width / 2){
                showRectangle3 = true;
                if (!isSnarePinched[i]) {
                    snare.play();
                    isSnarePinched[i] = true;
                }
            } else {
                isSnarePinched[i] = false;
            }

            // if middle + thumb touch on left half of screen
            if(dist(middleX, middleY, thumbX, thumbY)<20 && middleX < width / 2){
                showRectangle4 = true;
                if (!isCymbalPinched[i]) {
                    cymbal.play();
                    isCymbalPinched[i] = true;
                }
            } else {
                isCymbalPinched[i] = false;
            }

            // if middle + thumb touch on right half of screen
            if(dist(middleX, middleY, thumbX, thumbY)<20 && middleX > width / 2){
                showRectangle2 = true;
                if (!isHiHatPinched[i]) {
                    hiHat.play();
                    isHiHatPinched[i] = true;
                }
            } else {
                isHiHatPinched[i] = false;
            }

            // if ring + thumb touch on left half of screen
            if(dist(ringX, ringY, thumbX, thumbY)<20 && ringX < width / 2){
                showRectangle5 = true;
                if (!isCowBellPinched[i]) {
                    cowBell.play();
                    isCowBellPinched[i] = true;
                }
            } else {
                isCowBellPinched[i] = false;
            }

            // if ring + thumb touch on right half of screen
            if(dist(ringX, ringY, thumbX, thumbY)<20 && ringX > width / 2){
                showRectangle6 = true;
                if (!isPercussion6Pinched[i]) {
                    percussion6.play();
                    isPercussion6Pinched[i] = true;
                }
            } else {
                isPercussion6Pinched[i] = false;
            }
            
    // coloring the screen when a certain side is pinched on        
    }
    if (showRectangle1) {
        RightColor = 0;
        drawRightHalfRect();
    }
    if (showRectangle2) {
        RightColor = 180;
        drawRightHalfRect();
    }
    if (showRectangle3) {
        LeftColor = 120;
        drawLeftHalfRect();
    }
    if (showRectangle4) {
        LeftColor = 25;
        drawLeftHalfRect();
    }
    if (showRectangle5) {
        LeftColor = 340;
        drawLeftHalfRect();
    }
    if (showRectangle6) {
        RightColor = 40;
        drawRightHalfRect();
    }

    //fft visualizer
    let spectrum = fft.analyze();
    // splitting into different bands to get a detailed visual effect. Used some trial and error to see what would look detailed enough
    let bands = [
        energy(spectrum, 20, 200),
        energy(spectrum, 200, 400),
        energy(spectrum, 400, 800),
        energy(spectrum, 800, 1000),
        energy(spectrum, 1000, 1500),
        energy(spectrum, 1500, 2000),
        energy(spectrum, 2500, 3000),
        energy(spectrum, 3000, 3500),
        energy(spectrum, 3500, 4000),
    ]
      for (let i = 0; i < bands.length; i++) {
    strokeWeight(1);
    stroke(255);
    fill(i*180/bands.length, 100, 100, 5);
    circle(width/2, height / 2, map(bands[i], 0, 1, 1, 900));
    }
    
    // line splitting screen
       push();
       strokeWeight(4);
       stroke(0, 0, 0);
       line(width / 2, 0, width / 2, height);
       pop();

// text to show which side is which instrument
    push();
    textSize(15);
    fill(0, 0, 100);
    noStroke();
    textAlign(CENTER, CENTER);
    text("Thumb + Index = Kick", 600, 20);
    text("Thumb + Index = Snare", 200, 20);
    text("Thumb + Middle = Crash", 200, 40);
    text("Thumb + Middle = Hi-Hat", 600, 40);
    text("Thumb + Ring = Cowbell", 200, 60);
    text("Thumb + Ring = Cymbal bell", 600, 60);
    pop();

}
        

    


function gotHands(results) {
    hands = results;
}

// energy function from class code
function energy(spectrum, lowHz, highHz) {
  let nyquist = getAudioContext().sampleRate / 2;
  let lo = floor(lowHz / nyquist * spectrum.length);
  let hi = min(spectrum.length - 1, ceil(highHz / nyquist * spectrum.length));
  let sum = 0;
  for (let i = lo; i <= hi; i++) sum += spectrum[i];
  let avg = sum / (hi - lo + 1);
  return constrain(map(20 * Math.log10(avg + 1e-6), -100, -10, 0, 1), 0, 1);
}