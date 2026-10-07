// setting up time variables
let s, m, h;
let ps; // variable for previous second
let ms, fc; // variable for counting relative to this sketch


// shapes/windows
//let windows = [];

// basic array
let numCirc = 10; // num of circles
// arrays for locations
let posx = [];
let posy = [];


function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(220);

   //clock set up
                let h = hour();
                let m = minute();
                let s = second();
                // print(h + ":" + m + ":" + s);

                
                text('current time: ' + h + ':' + nf(m, 2, 0) + ':' + nf(s, 2, 0), 10, 170);

                // only update console when the second changes value
                if (ps != s) {
                    console.log('hour: ' + h + ', minute:' + m + 'second: ' + s);
                }
                // save current second to the previous second variable
                ps = s;

//-------------------------------------------

     //window array set up

     //Seconds building (far right)
        // window array 1
                let numCirc = s/2; // num of circles
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

