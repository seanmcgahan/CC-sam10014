let video;
let handPose;
let hands = [];

// starting position of pipes / gates
let start = 700;
let start2 = 1100;

let speed = 3; // speed pipes move across at

let square = [];
let numSquare = 20;

// state of game
let gameOver = false;

// class of squares (based code off example from class a few weeks ago, changed from circles to squares )
class Square {
    constructor(mySize) {
        this.diam = mySize;
        this.col = color(random(255), random(255), random(255));

        this.xpos = random(this.diam, width - this.diam);
        this.ypos = random(this.diam, height - this.diam);

        this.xspeed = random(1, 5);
        this.yspeed = 0;

    }

    update() {
        this.xpos += this.xspeed;

        if (this.xpos > width + this.diam / 2) {
            this.xpos = -this.diam / 2 - 20;
        }
    }

    render() {
        noStroke(); 
        fill(this.col);
        rect(this.xpos, this.ypos, this.diam);
    }
}

// have two different pipes come across screen at different heights
// I called these pipes at first but they are more like gates, was thinking of flappybird
function drawPipe() {
    push();
    noStroke();
    fill(255);
    rect(start, 0, 25, 300);
    rect(start, 500, 25, 500);
    pop();

    push();
    noStroke();
    fill(255);
    rect(start2, -200, 25, 300);
    rect(start2, 300, 25, 300);
    pop();
}

async function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < numSquare; i++) {
        square.push(new Square(random(10, 50)));
    }
        
// ml set up
    handPose = await ml5.handPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();


    handPose.detectStart(video, gotHands);
}

// function drawCharacter() {
//     // let character = drawCharacter();
//     push();
//     noStroke();
//     fill(255);
//     ellipse(width/5, height/2, 20, 20);
//     pop();
// }

function draw() {
    background(100);
    //image(video, 0, 0, width, height);
    for (let i = 0; i < square.length; i++) {
        square[i].update();
        square[i].render();
    }



    drawPipe();
    start = start - speed;
    start2 = start2 - speed;

    // reset position across screen
    if (start < -25) {
        start = width + 25;
    }

    if (start2 < -25) {
        start2 = width + 25;
    }

    if (hands.length > 0) {
        let fingerX = hands[0].index_finger_tip.x;
        let fingerY = hands[0].index_finger_tip.y;
        let thumbX = hands[0].thumb_tip.x;
        let thumbY = hands[0].thumb_tip.y;
        let middleX = hands[0].middle_finger_tip.x;
        let middleY = hands[0].middle_finger_tip.y;


        // draw index finger
        push();
        noFill();
        colorMode(HSB);
        stroke(180, 100, 100)
        ellipse(fingerX, fingerY, 20, 20);
        pop();

        
        //detect character collision with pipe 1
        if (fingerX > start && fingerX < start + 25 && (fingerY < 300 || fingerY > height - 100))
            {
            // collision
            gameOver = true;
            noLoop(); // stop the game loop on collision
        }
        //detect character collision with pipe 2
        
        if (fingerX > start2 && fingerX < start2 + 25 && (fingerY < 100 || fingerY > 300))
            {
            // collision
            gameOver = true;
            noLoop(); // stop the game loop on collision
        }
        
        //detect character collision with squares
        for (let i = 0; i < square.length; i++) {

            let sq = square[i];

            let insideX = fingerX > sq.xpos - sq.diam / 2 && fingerX < sq.xpos + sq.diam / 2;
            let insideY = fingerY > sq.ypos - sq.diam / 2 && fingerY < sq.ypos + sq.diam / 2;

            if (insideX && insideY) {
                // collision
                gameOver = true;
                noLoop(); // stop the game loop on collision
            }
        }

        if (gameOver) {
            push();
            fill(255);
            stroke(5);
            textAlign(CENTER, CENTER);
            textSize(80);
            text('Game Over', width / 2, height / 2);
            textSize(20);
            text('Press space to restart', width / 2, height / 2 + 75);
            pop();
        }
    }
}
        

    


function gotHands(results) {
    hands = results;
}

function keyPressed() {
    if (key === ' ' && gameOver) {
        gameOver = false;
        loop(); // restart
    }
}
