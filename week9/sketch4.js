let video;
let handPose;
let hands = [];

let start = 700;
let speed = 3;

let characterX = 800/5;
let characterY = 600/2;
let characterSize = 20;

function drawPipe() {
    push();
    noStroke();
    fill(255);
    rect(start, 0, 200, 200);
    pop();
}



async function setup() {
    createCanvas(800, 600);

    handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();


    handPose.detectStart(video, gotHands);
}

function drawCharacter() {
    push();
    noStroke();
    fill(255);
    ellipse(characterX, characterY, characterSize, characterSize);
    pop();
}

function checkCollision() {
    //character
    let left = characterX - characterSize / 2;
    let right = characterX + characterSize / 2;
    let top = characterY - characterSize / 2;
    let bottom = characterY + characterSize / 2;

    //pipe
    let pipeLeft = start;
    let pipeRight = start + 200;

    //if character collision with pipe
    if (right > pipeLeft && left < pipeRight && top < 200) {
        noLoop();
    }
}

function draw() {
    background(100);
    //image(video, 0, 0, width, height);

    drawPipe();
    start = start - speed;

    checkCollision();

    if (start < -200) {
        start = width + 200;
    }

    if (hands.length > 0) {
        let fingerX = hands[0].index_finger_tip.x;
        let fingerY = hands[0].index_finger_tip.y;
        let thumbX = hands[0].thumb_tip.x;
        let thumbY = hands[0].thumb_tip.y;
        let middleX = hands[0].middle_finger_tip.x;
        let middleY = hands[0].middle_finger_tip.y;

        // if fingers arent touching
        if(dist(fingerX, fingerY, thumbX, thumbY)>30 && dist(middleX, middleY, thumbX, thumbY)>30){
            //push();
            translate(0, 0);
            drawCharacter();
            //pop();
        }
        
        // if pointer + thumb touch
        if(dist(fingerX, fingerY, thumbX, thumbY)<30){
            push();
            translate(0, 200);
            drawCharacter();
            pop();
        filter(POSTERIZE, 5);
        }

        // if middle + thumb touch
        if(dist(middleX, middleY, thumbX, thumbY)<30){
            push();
            translate(0, -200);
            drawCharacter();
            pop();
        filter(POSTERIZE, 5);
        }

        // draw index and thumb
        noFill();
        stroke('blue')
        ellipse(fingerX, fingerY, 20, 20);
        stroke(0);
        ellipse(thumbX, thumbY, 20, 20);

        // draw middle and thumb
        noFill();
        stroke('red');
        ellipse(middleX, middleY, 20, 20);
        
    }
}
        

    


function gotHands(results) {
    hands = results;
}
