let data;

let url = 'https://data.cityofnewyork.us/resource/hjae-yuav.json';

let user = [];
let bev = [];
let breakfast = [];

let borough = [];
let name = [];

async function setup() {
  createCanvas(800, 600);
  data = await loadJSON(url);
  // iterate over values in the data
  for (let i = 0; i < data.likes.length; i++) {
    borough[i] = data.borough[i].name;
  }
}

function draw() {
  background(220);
  // write it out
  textSize(24);
  for (let i = 0; i < data.likes.length; i++) {
    text(user[i] + " likes " + bev[i] + " and " + breakfast[i],20,40 * (1 + i));
  }
  noLoop();
}