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
    createCanvas(800, 600);

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


     //window array set up
     
        // window array 1
                let numCirc = s/2; // num of circles
                    // arrays for locations
                let win1x = [];
                let win1y = [];

                // fill array with data
                for (let i = 0; i < numCirc; i++) {
                win1x[i] = 20;
                win1y[i] = 30 + i*25;
                }
        
        // window array 2
                let numWin2 = (s-1)/2;
                let win2x = [];
                let win2y = [];

                // fill array with data
                for (let i = 0; i < numWin2; i++) {
                win2x[i] = 90;
                win2y[i] = 30 + i*25;
                }

    for (let i = 0; i < numCirc; i++) {
    rect(win1x[i], win1y[i], 20, 20);
  }

  for (let i = 0; i < numWin2; i++) {
    rect(win2x[i], win2y[i], 20, 20);
  }
  }

