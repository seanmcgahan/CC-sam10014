// setting up time variables
let s, m, h;
let ps; // variable for previous second
let ms, fc; // variable for counting relative to this sketch


// shapes/windows
//let windows = [];

// basic array
// let numCirc = 10; // num of circles
// // arrays for locations
// let posx = [];
// let posy = [];

let height1;
let width1;
// allows adjustable sizing of buildings when I insert them in


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);

   // randomSeed(143);
    // randomheight = random(-120, -500);

}

function drawbuilding1() {
    // draw new building version 1. Using this to reference in the all buildings that arent the one with hours, seconds, or minutes
    push();
    rect(0, 620, width1, height1);
    // windows
    fill(200, 70, 30);
    for (let v = 0; v < floor(-height1/17); v++)
    for (let u = 0; u < floor(width1/17); u++)
        rect(6.5 +u*17, 600 - v*17, 12, 12);
    pop();
}

function draw() {
    //background(220);

    //sky (static)
    // background(220, 30, 100);

    // dynamic sky. Sky changes shade depending on the time of day
    let hournumber = hour();
    // let hournumber = 21
    // daytime
    if (hournumber >= 7 && hournumber < 18) {
        background(220, 30, 100);
    // dusk
    } else if (hournumber >= 18 && hournumber < 19) {
        background(220, 30, 50);
    // evening
    } else if (hournumber >= 19 && hournumber < 21) {
        background(220, 30, 25);
    // night
    } else if (hournumber >= 21 || hournumber < 6) {
        background(220, 30, 10);
    // early morning sunrise
    } else if (hournumber >= 6 && hournumber < 7) {
        background(15, 55, 100);
    }

    // background skyline

    push();
    randomSeed(122);  //122 looks good for reference to come back to
    translate(0, 0, 0);
    //noStroke();
    strokeWeight(0);

    // darken skyline if it is nightime
    if (hournumber >= 19 && hournumber < 21) {
        fill(20, 30, 30);
    }
    if (hournumber >= 21 || hournumber < 6) {
        fill(20, 30, 15);
    } else if (hournumber >= 6 && hournumber < 19) {
        fill(20, 30, 45);
    }
    for(let i = 0; i < 40; i++) { // for loop (x axis)
        let randomheight = random(-150, -500);
        let randomwidth = random(40, 55);
        //let randomspacing = random(60, 85)
        rect(i*40, 640, randomwidth, randomheight);
    }
    filter(BLUR, 9);
    pop();


    // 2nd row of buildings
    // from left to right. Placing buildings manually to get positioning and spacing to my liking. Didn't like using a loop for this
    push();

    //2.1
    push();
    height1 = -231;
    width1 = 127;
    translate(60, 0, 0);
    fill(100, 50, 25);
    drawbuilding1();
    pop();

    //2.2
    push();
    height1 = -200;
    width1 = 111;
    translate(200, 0, 0);
    fill(40, 50, 30);
    drawbuilding1();
    pop();

    //2.3
    push();
    height1 = -250;
    width1 = 160;
    translate(322, 0, 0);
    fill(60, 50, 40);
    drawbuilding1();
    pop();

    //2.4
    push();
    height1 = -180;
    width1 = 140;
    translate(480, 0, 0);
    fill(0, 50, 35);
    drawbuilding1();
    pop();

    //2.5
    push();
    height1 = -300;
    width1 = 130;
    translate(620, 0, 0);
    fill(30, 50, 40);
    drawbuilding1();
    pop();

    //2.6
    push();
    height1 = -250;
    width1 = 120;
    translate(760, 0, 0);
    fill(0, 0, 45);
    drawbuilding1();
    pop();

    //2.7
    push();
    height1 = -270;
    width1 = 177;
    translate(840, 0, 0);
    fill(20, 20, 50);
    drawbuilding1();
    pop();

    //2.8
    push();
    height1 = -220;
    width1 = 144;
    translate(1030, 0, 0);
    fill(95, 25, 50);
    drawbuilding1();
    pop();

    //2.9
    push();
    height1 = -298;
    width1 = 150;
    translate(1190, 0, 0);
    fill(10, 60, 50);
    drawbuilding1();
    pop();

    //2.10
    push();
    height1 = -165;
    width1 = 155;
    translate(1331, 0, 0);
    fill(20, 20, 70);
    drawbuilding1();
    pop();

    filter(BLUR, 2);
    pop();

// time buildings shapes. These are just the simple rectangle shapes of the hours, minutes, and seconds buildings. doesnt include windows, those are in their own logic
            // seconds building (far right)
            push();
            stroke(0, 0, 100);
            fill(30, 70, 50);
            rect(1094.5, 620, 40, -525);
            pop();

            //seconds windows
            push();
            fill(200, 70, 30);
            for (let v = 0; v < 30; v++)
            for (let u = 0; u < 2; u++)
                rect(1117 - u*17, 600 - v*17, 12, 12);
            pop();

            // minutes building (middle)
            push();
            stroke(0, 0, 100);
            fill(35, 40, 60);
            rect(592, 620, 79.5, -268);
            pop();

            // minutes windows
            push();
            fill(200, 70, 30);
            for (let v = 0; v < 15; v++)
            for (let u = 0; u < 4; u++)
                rect(600 + u*17, 600 - v*17, 12, 12);
            pop();

            // hours building (far left)
            push();
            stroke(0, 0, 100);
            fill(50, 0, 70);
            rect(292, 620, 46.5, -120);
            pop();

            //hours windows
            push();
            fill(200, 70, 30);
            for (let v = 0; v < 6; v++)
            for (let u = 0; u < 2; u++)
                rect(300 + u*17, 600 - v*17, 12, 12);
            pop();

// general scenery

// other buildings (first row). Once again placing manually so I can control the composition better. Works well with how I set up the building size to be dynamic and customizable.
        // building 1.1
        push();
        height1 = -435;
        width1 = 77;
        translate(353, 0, 0);
        fill(0, 70, 40);
        drawbuilding1();
        pop();

        // building 1.2
        push();
        height1 = -350;
        width1 = 94;
        translate(690, 0, 0);
        fill(0, 0, 55);
        drawbuilding1();
        pop();

        // building 1.3
        push();
        height1 = -200;
        width1 = 127;
        translate(1150, 0, 0);
        fill(20, 70, 50);
        drawbuilding1();
        pop();

        // building 1.4
        push();
        height1 = -300;
        width1 = 77;
        translate(805, 0, 0);
        fill(50, 50, 50);
        drawbuilding1();
        pop();

        // building 1.5
        push();
        height1 = -95;
        width1 = 144;
        translate(135, 0, 0);
        fill(60, 60, 60);
        drawbuilding1();
        pop();

        // building 1.6
        push();
        height1 = -503;
        width1 = 77;
        translate(500, 0, 0);
        fill(30, 20, 50);
        drawbuilding1();
        pop();

        // building 1.7
        push();
        height1 = -450;
        width1 = 42;
        translate(445, 0, 0);
        fill(40, 40, 40);
        drawbuilding1();
        pop();

        // building 1.8
        push();
        height1 = -468;
        width1 = 60;
        translate(900, 0, 0);
        fill(50, 30, 70);
        drawbuilding1();
        pop();

        // building 1.9
        push();
        height1 = -180;
        width1 = 94;
        translate(980, 0, 0);
        fill(0, 20, 80);
        drawbuilding1();
        pop();

        // building 1.10
        push();
        height1 = -180;
        width1 = 43;
        translate(80, 0, 0);
        fill(0, 20, 60);
        drawbuilding1();
        pop();

        //building 1.11
        push();
        height1 = -300;
        width1 = 94;
        translate(-25, 0, 0);
        fill(0, 0, 80);
        drawbuilding1();
        pop();

        // building 1.12
        push();
        height1 = -384;
        width1 = 94;
        translate(1293, 0, 0);
        fill(0, 0, 80);
        drawbuilding1();
        pop();

        //building 1.13
        push();
        height1 = -299;
        width1 = 60;
        translate(1400, 0, 0);
        fill(60, 40, 60);
        drawbuilding1();
        pop();

        //building 1.14
        push();
        height1 = -452;
        width1 = 60;
        translate(1473, 0, 0);
        fill(20, 40, 60);
        drawbuilding1();
        pop();

//road
            push();
            fill(0, 0, 20);
            rect(0, 620, windowWidth, 110);
            pop();

// sidewalk (top one)
            push();
            fill(20, 20, 70);
            rect(0, 620, windowWidth, 10);
            pop();

// grass
            push();
            fill(90, 80, 50);
            rect(0, 730, windowWidth, 40);
            pop();

//sidewalk 2 (bottom one)
            push();
            fill(20, 20, 70);
            rect(0, 720, windowWidth, 10);
            pop();






   //clock set up 
                let h = hour();
                let m = minute();
                let s = second();
                // print(h + ":" + m + ":" + s);

                push();
                fill(0,0,0);
                text('current time: ' + h + ':' + nf(m, 2, 0) + ':' + nf(s, 2, 0), 10, 170);
                pop();

                // only update console when the second changes value
                if (ps != s) {
                    console.log('hour: ' + h + ', minute:' + m + 'second: ' + s);
                }
                // save current second to the previous second variable
                ps = s;

//-------------------------------------------

     //window array set up. This adds a new window for each unit of time that passes. Each new window is yellow creating the effect that lights are turning on
     // The collumns of each are offset by a set amount of time so the windows light up across the row before moving up to the next one
     // referenced the array examples in the class github page to get my baseline for how this would work

     fill(50, 60, 100);

     //Seconds building (far right)
        // window array 1
                let numCirc = s/2; // num of windows. It says numCirc because it was the original code I was working with to fundamentally test if this would work and was based off of the example from class github page. I tried to change this and it broke a bunch of stuff so Im leaving the name as is
                    // arrays for locations
                let win1x = [];
                let win1y = [];

                // fill array with data
                for (let i = 0; i < numCirc; i++) {
                win1x[i] = 1100;
                win1y[i] = 600 - i*17;
                }
        
        // window array 2
                let numWin2 = (s-1)/2;
                let win2x = [];
                let win2y = [];

                // fill array with data
                for (let i = 0; i < numWin2; i++) {
                win2x[i] = 1117;
                win2y[i] = 600 - i*17;
                }

        // Window print 1
                for (let i = 0; i < numCirc; i++) {
                rect(win1x[i], win1y[i], 12, 12);
            }

         // Window print 2
            for (let i = 0; i < numWin2; i++) {
                rect(win2x[i], win2y[i], 12, 12);
            }

    //-------------------------------------------

    // minutes building (middle)
        //window array 1 (minutes)
                let numMin1 = m/4; // num of windows for minutes
                    // arrays for locations
                let min1x = [];
                let min1y = [];
            // window locations
                for (let w = 0; w < numMin1; w++) {
                min1x[w] = 600;
                min1y[w] = 600 - w*17;
                }

            // Draw minute windows
                for (let w = 0; w < numMin1; w++) {
                rect(min1x[w], min1y[w], 12, 12);
            }

             //window array 2 (minutes)
                let numMin2 = (m-1)/4; // num of windows for minutes
                    // arrays for locations
                let min2x = [];
                let min2y = [];
            // window locations 2
                for (let w = 0; w < numMin2; w++) {
                min2x[w] = 617;
                min2y[w] = 600 - w*17;
                }

            // Draw minute windows 2
                for (let w = 0; w < numMin2; w++) {
                rect(min2x[w], min2y[w], 12, 12);
            }

            //window array 3 (minutes)
                let numMin3 = (m-2)/4; // num of windows for minutes
                    // arrays for locations
                let min3x = [];
                let min3y = [];
            // window locations 3
                for (let w = 0; w < numMin3; w++) {
                min3x[w] = 634;
                min3y[w] = 600 - w*17;
                }

            // Draw minute windows 3
                for (let w = 0; w < numMin3; w++) {
                rect(min3x[w], min3y[w], 12, 12);
            }

            //window array 4 (minutes)
                let numMin4 = (m-3)/4; // num of windows for minutes
                    // arrays for locations
                let min4x = [];
                let min4y = [];
            // window locations 4
                for (let w = 0; w < numMin4; w++) {
                min4x[w] = 651;
                min4y[w] = 600 - w*17;
                }

            // Draw minute windows 4
                for (let w = 0; w < numMin4; w++) {
                rect(min4x[w], min4y[w], 12, 12);
            }


    // --------------------------------------

    // hours building (left
        //hours array 1
                let numHr1 = (h % 12)/2; // num of windows for hours
                    // arrays for locations
                let hr1x = [];
                let hr1y = [];
            // window locations
                for (let q = 0; q < numHr1; q++) {
                hr1x[q] = 300;
                hr1y[q] = 600 - q*17;
                }

            // Draw hour windows
                for (let q = 0; q < numHr1; q++) {
                rect(hr1x[q], hr1y[q], 12, 12);
            }

        //hours array 2
                let numHr2 = ((h % 12)-1)/2; // num of windows for hours
                    // arrays for locations
                let hr2x = [];
                let hr2y = [];
            // window locations
                for (let q = 0; q < numHr2; q++) {
                hr2x[q] = 317;
                hr2y[q] = 600 - q*17;
                }

            // Draw hour windows
                for (let q = 0; q < numHr2; q++) {
                rect(hr2x[q], hr2y[q], 12, 12);
            }

}

