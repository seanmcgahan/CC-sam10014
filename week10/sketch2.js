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

//visuals
let RightColor = 0;
let LeftColor = 180;
let showRectangle1 = false;
let showRectangle2 = false;
let showRectangle3 = false;
let showRectangle4 = false;
let showRectangle5 = false;
let showRectangle6 = false;

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
    
    // visuals
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

    // line splitting screen
       push();
       strokeWeight(4);
       line(width / 2, 0, width / 2, height);
       pop();
}
        

    


function gotHands(results) {
    hands = results;
}

