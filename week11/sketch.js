let url = 'https://data.cityofnewyork.us/resource/hjae-yuav.json';

let data;

let boroughArray = [];


//list all boroughs
let bronx = 0;
let brooklyn = 0;
let manhattan = 0;
let queens = 0;
let statenIsland = 0;

// load in photos of toilet paper
let photo;

let paper;

// initial paper position
let bronxPaperY = -70;
let brooklynPaperY = -70;
let manhattanPaperY = -70;
let queensPaperY = -70;
let statenIslandPaperY = -70;

// number initial position
let bronxNumberY = - 100;
let brooklynNumberY = - 100;
let manhattanNumberY = - 100;
let queensNumberY = - 100;
let statenIslandNumberY = - 100;

async function setup() {
  createCanvas(800, 600);
  data = await loadJSON(url);
  photo = await loadImage('assets/roll3.png');
  paper = await loadImage('assets/paper2.png');


// fill boroughArray with all of the boroughs from the data
  for (let i = 0; i < data.length; i++) {
    boroughArray.push(data[i].borough);
  }
  console.log(boroughArray);


  
  // borough counts
  for (let i = 0; i < boroughArray.length; i++) {
    if (boroughArray[i] === 'Bronx') {
      bronx++;
    } else if (boroughArray[i] === 'Brooklyn') {
      brooklyn++;
    } else if (boroughArray[i] === 'Manhattan') {
      manhattan++;
    } else if (boroughArray[i] === 'Queens') {
      queens++;
    } else if (boroughArray[i] === 'Staten Island') {
      statenIsland++;
    }
  }
  console.log('Bronx:', bronx);
  console.log('Brooklyn:', brooklyn);
  console.log('Manhattan:', manhattan);
  console.log('Queens:', queens);
  console.log('Staten Island:', statenIsland);

// scaled lengths based on toilet counts`
let bronxLength = bronx * 2;
let brooklynLength = brooklyn * 2;
let manhattanLength = manhattan * 2;
let queensLength = queens * 2;
let statenIslandLength = statenIsland * 2;

}

function draw() {
  background(0);

  // rolled out paper
  imageMode(CENTER);
  // bronx
  image(paper, 102, bronxPaperY, 150, 480);
  // brooklyn
  image(paper, 252, brooklynPaperY, 150, 480);
  // manhattan
  image(paper, 402, manhattanPaperY, 150, 480);
  // queens
  image(paper, 552, queensPaperY, 150, 480);
  // staten island
  image(paper, 702, statenIslandPaperY, 150, 480);


  // masking rect
  fill(0);
  noStroke();
  rect(0, 0, width, 126);

  // title
  push();
  fill(255);
  textFont('courier');
  textAlign(CENTER);
  textSize(30);
  text('NYC Toilets in Public Parks (By Borough)', width / 2, 32);
  pop();
  

  // name above each image
  textAlign(CENTER);
  fill(255);
  textFont('courier');
  text('Bronx', 100, 55);
  text('Brooklyn', 250, 55);
  text('Manhattan', 400, 55);
  text('Queens', 550, 55);
  text('Staten Island', 700, 55);

  // directions
  push();
  fill(255);
  textFont('courier');
  textAlign(CENTER);
  textSize(10);
  text('Click on each borough to reveal the number of toilets', width / 2, 595);
  pop();

  // scale
  push();
  stroke(255);
  strokeWeight(3);
  line(30, 160, 30, 600);
  // mark at 25% of the way down
  line(30, 270, 40, 270);
  // mark at 50% of the way down
  line(30, 380, 40, 380);
  // mark at 75% of the way down
  line(30, 490, 40, 490);
  // mark at 100% of the way down
  line(30, 598.5, 40, 598.5);
  pop();

  //text
  push();
  fill(255);
  strokeWeight(0);
  textAlign(RIGHT);
  textFont('courier');
  text('0', 25, 165);
  text('50', 25, 275);
  text('100', 25, 385);
  text('150', 25, 495);
  text('200', 25, 598);
  pop();


  // draw the TP roll image for each borough, scaled in proportion to the num of toilets
  // center the image
  imageMode(CENTER);
  // bronx tp
  image(photo, 100, 95, 140, 140);
  // brooklyn tp
  image(photo, 250, 95, 140, 140);
  // manhattan tp
  image(photo, 400, 95, 140, 140);
  // queens tp
  image(photo, 550, 95, 140, 140);
  // staten island tp
  image(photo, 700, 95, 140, 140);

  // number on the roll
  push();
  fill(0);
  textFont('courier');
  textAlign(CENTER);
  textSize(30);
  // bronx
  text(bronx, 100, bronxNumberY);
  // brooklyn
  text(brooklyn, 250, brooklynNumberY);
  // manhattan
  text(manhattan, 400, manhattanNumberY);
  // queens
  text(queens, 550, queensNumberY);
  // SI
  text(statenIsland, 700, statenIslandNumberY);
  pop();

}

function mousePressed() {
    // scale up to fit page
let bronxLength = bronx * 2;
let brooklynLength = brooklyn * 2;
let manhattanLength = manhattan * 2;
let queensLength = queens * 2;
let statenIslandLength = statenIsland * 2;

push();

fill(255);
textFont('courier');
textAlign(CENTER);
textSize(30);


    if (mouseX > 40 && mouseX < 160 && mouseY > 0 && mouseY < 165) {
    // move bronx paper down
        if (bronxPaperY === -70) {
            bronxPaperY = bronxLength;
            bronxNumberY = 100;
        } else {
            bronxPaperY = -70;
            bronxNumberY = -100;
        }
    }

    if (mouseX > 190 && mouseX < 310 && mouseY > 0 && mouseY < 165) {
    // move brooklyn paper down
        if (brooklynPaperY === -70) {
            brooklynPaperY = brooklynLength;
            brooklynNumberY = 100;
        } else {
            brooklynPaperY = -70;
            brooklynNumberY = -100;
        }
    }

    if (mouseX > 340 && mouseX < 460 && mouseY > 0 && mouseY < 165) {
    // move manhattan paper down
        if (manhattanPaperY === -70) {
            manhattanPaperY = manhattanLength;
            manhattanNumberY = 100;
        } else {
            manhattanPaperY = -70;
            manhattanNumberY = -100;
        }
    }

    if (mouseX > 490 && mouseX < 610 && mouseY > 0 && mouseY < 165) {
    // move queens paper down
        if (queensPaperY === -70) {
            queensPaperY = queensLength;
            queensNumberY = 100;
        } else {
            queensPaperY = -70;
            queensNumberY = -100;
        }
    }

    if (mouseX > 640 && mouseX < 760 && mouseY > 0 && mouseY < 165) {
    // move staten island paper down
        if (statenIslandPaperY === -70) {
            statenIslandPaperY = statenIslandLength;
            statenIslandNumberY = 100;
        } else {
            statenIslandPaperY = -70;
            statenIslandNumberY = -100;
        }
    }
pop();
}