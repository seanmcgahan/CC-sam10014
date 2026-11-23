let url = 'https://data.cityofnewyork.us/resource/hjae-yuav.json';

let data;

let boroughArray = [];


//list all boroughs
let bronx = 0;
let brooklyn = 0;
let manhattan = 0;
let queens = 0;
let statenIsland = 0;

// load in photo
let photo;

let paper;

// initial paper position
let bronxPaperY = -70;
let brooklynPaperY = -70;
let manhattanPaperY = -70;
let queensPaperY = -70;
let statenIslandPaperY = -70;

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

  // name above each image
  textAlign(CENTER);
  fill(255);
  text('Bronx', 100, 25);
  text('Brooklyn', 250, 25);
  text('Manhattan', 400, 25);
  text('Queens', 550, 25);
  text('Staten Island', 700, 25);


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

}

function mousePressed() {
let bronxLength = bronx * 2;
let brooklynLength = brooklyn * 2;
let manhattanLength = manhattan * 2;
let queensLength = queens * 2;
let statenIslandLength = statenIsland * 2;


    if (mouseX > 40 && mouseX < 160 && mouseY > 0 && mouseY < 165) {
    // move bronx paper down
        if (bronxPaperY === -70) {
            bronxPaperY = bronxLength;
        } else {
            bronxPaperY = -70;
        }
    }

    if (mouseX > 190 && mouseX < 310 && mouseY > 0 && mouseY < 165) {
    // move brooklyn paper down
        if (brooklynPaperY === -70) {
            brooklynPaperY = brooklynLength;
        } else {
            brooklynPaperY = -70;
        }
    }

    if (mouseX > 340 && mouseX < 460 && mouseY > 0 && mouseY < 165) {
    // move manhattan paper down
        if (manhattanPaperY === -70) {
            manhattanPaperY = manhattanLength;
        } else {
            manhattanPaperY = -70;
        }
    }

    if (mouseX > 490 && mouseX < 610 && mouseY > 0 && mouseY < 165) {
    // move queens paper down
        if (queensPaperY === -70) {
            queensPaperY = queensLength;
        } else {
            queensPaperY = -70;
        }
    }

    if (mouseX > 640 && mouseX < 760 && mouseY > 0 && mouseY < 165) {
    // move staten island paper down
        if (statenIslandPaperY === -70) {
            statenIslandPaperY = statenIslandLength;
        } else {
            statenIslandPaperY = -70;
        }
    }

}