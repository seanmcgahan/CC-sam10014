let url = 'https://data.cityofnewyork.us/resource/hjae-yuav.json';

let data;

let boroughArray = [];

//list all boroughs
let bronx = 0;
let brooklyn = 0;
let manhattan = 0;
let queens = 0;
let statenIsland = 0;

async function setup() {
  createCanvas(800, 600);
  data = await loadJSON(url);
// fill boroughArray with all of the boroughs from the data
  for (let i = 0; i < data.length; i++) {
    boroughArray.push(data[i].borough);
  }
  console.log(boroughArray);


  // borough counts
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

}

function draw() {
  background(220);



  // draw circles for each borough count

  // circle size correlating to count of toilets

  // bronx circle
  circle(100, 100, bronx);
  // brooklyn circle
  circle(250, 100, brooklyn);
  // manhattan circle
  circle(400, 100, manhattan);
  // queens circle
  circle(550, 100, queens);
  // staten island circle
  circle(700, 100, statenIsland);
}