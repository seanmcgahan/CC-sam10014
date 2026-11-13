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
    
}

function draw() {
    background(220);
    image(video, 0, 0, width, height);
       // line splitting screen
        line(width / 2, 0, width / 2, height);

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
                if (!isKickPinched[i]) {
                    kick.play();
                    isKickPinched[i] = true;
                }
            } else {
                isKickPinched[i] = false;
            }

            // if pointer + thumb touch on left half of screen
            if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX < width / 2){
                if (!isSnarePinched[i]) {
                    snare.play();
                    isSnarePinched[i] = true;
                }
            } else {
                isSnarePinched[i] = false;
            }

            // if middle + thumb touch on left half of screen
            if(dist(middleX, middleY, thumbX, thumbY)<20 && middleX < width / 2){
                if (!isCymbalPinched[i]) {
                    cymbal.play();
                    isCymbalPinched[i] = true;
                }
            } else {
                isCymbalPinched[i] = false;
            }

            // if middle + thumb touch on right half of screen
            if(dist(middleX, middleY, thumbX, thumbY)<20 && middleX > width / 2){
                if (!isHiHatPinched[i]) {
                    hiHat.play();
                    isHiHatPinched[i] = true;
                }
            } else {
                isHiHatPinched[i] = false;
            }

            // if ring + thumb touch on left half of screen
            if(dist(ringX, ringY, thumbX, thumbY)<20 && ringX < width / 2){
                if (!isCowBellPinched[i]) {
                    cowBell.play();
                    isCowBellPinched[i] = true;
                }
            } else {
                isCowBellPinched[i] = false;
            }

            // if ring + thumb touch on right half of screen
            if(dist(ringX, ringY, thumbX, thumbY)<20 && ringX > width / 2){
                if (!isPercussion6Pinched[i]) {
                    percussion6.play();
                    isPercussion6Pinched[i] = true;
                }
            } else {
                isPercussion6Pinched[i] = false;
            }
            
            
    }
}
        

    


function gotHands(results) {
    hands = results;
}

