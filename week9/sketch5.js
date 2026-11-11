let video;
let handPose;
let hands = [];

let start = 700;
let start2 = 800;
let start3 = 900;
let start4 = 1000;

let speed = 3;

function drawPipe() {
    push();
    noStroke();
    fill(255);
    rect(start, 0, 25, 300);
    rect(start, height - 100, 25, 500);
    pop();

    push();
    noStroke();
    fill(255);
    rect(start2, 0, 25, 400);
    rect(start2, height - 100, 25, 400);
    pop();

    push();
    noStroke();
    fill(255);
    rect(start3, 0, 25, 500);
    rect(start3, height - 100, 25, 300);
    pop();

    push();
    noStroke();
    fill(255);
    rect(start4, 0, 25, 400);
    rect(start4, height + 100, 25, 400);
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
    // let character = drawCharacter();
    push();
    noStroke();
    fill(255);
    ellipse(width/5, height/2, 20, 20);
    pop();
}

function draw() {
    background(100);
    //image(video, 0, 0, width, height);

    drawPipe();
    start = start - speed;
    start2 = start2 - speed;
    start3 = start3 - speed;
    start4 = start4 - speed;

    // reset position
    if (start < -25) {
        start = width + 25;
    }
    if (start2 < -25) {
        start2 = width + 25;
    }
    if (start3 < -25) {
        start3 = width + 25;
    }
    if (start4 < -25) {
        start4 = width + 25;
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
            //drawCharacter();
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

        // draw index
        noFill();
        stroke('blue')
        ellipse(fingerX, fingerY, 20, 20);

        
        //detect character collision with pipes
        if ((fingerX > start && fingerX < start + 25 && (fingerY < 300 || fingerY > height - 100)) ||
            (fingerX > start2 && fingerX < start2 + 25 && (fingerY < 400 || fingerY > height - 100)) ||
            (fingerX > start3 && fingerX < start3 + 25 && (fingerY < 500 || fingerY > height - 100)) ||
            (fingerX > start4 && fingerX < start4 + 25 && (fingerY < 400 || fingerY > height - 100))) 
            {
            // handle collision
            noLoop(); // stop the game loop on collision
        }
        
    }
}
        

    


function gotHands(results) {
    hands = results;
}
