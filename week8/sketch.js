let cam;

let trackColor;

async function setup() {
    createCanvas(800, 600);
    pixelDensity(1);
    // load video
    cam = await createCapture(VIDEO, { flipped: true });
    cam.size(800, 600);
    cam.hide();
    noStroke();
    fill(0);

    //track for color here:
    // trackColor = [255, 0, 0];
}

function draw() {
    // background(0);
    image(cam, 0, 0, width, height);

    cam.loadPixels();

    
}