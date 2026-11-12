let video;
let handPose;
let hands = [];


let kick;
let snare;

let isKickPinched = false;
let isSnarePinched = false;



async function setup() {
    createCanvas(800, 600);

    handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();

    handPose.detectStart(video, gotHands);

    kick = await loadSound('assets/kick5.mp3');
    snare = await loadSound('assets/snare.mp3');
}

function draw() {
    background(220);
    image(video, 0, 0, width, height);


    if (hands.length > 0) {
        let fingerX = hands[0].index_finger_tip.x;
        let fingerY = hands[0].index_finger_tip.y;
        let thumbX = hands[0].thumb_tip.x;
        let thumbY = hands[0].thumb_tip.y;
        let middleX = hands[0].middle_finger_tip.x;
        let middleY = hands[0].middle_finger_tip.y;
        
        // if pointer + thumb touch on right half of screen
        if(dist(fingerX, fingerY, thumbX, thumbY)<20 && fingerX > width / 2){
            if (!isKickPinched) {
                kick.play();
                isKickPinched = true;
            }
        } else {
            isKickPinched = false;
        }

        // if pointer + middle touch on left half of screen
        if(dist(fingerX, fingerY, middleX, middleY)<20 && fingerX > width / 2){
            if (!isSnarePinched) {
                snare.play();
                isSnarePinched = true;
            }
        } else {
            isSnarePinched = false;
        }
    }
}
        

    


function gotHands(results) {
    hands = results;
}

