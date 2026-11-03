let cam;

let trackColor;

let worldRecord = 20

async function setup() {
    createCanvas(800, 600);
    pixelDensity(1);
    // load video
    cam = await createCapture(VIDEO, { flipped: true });
    cam.size(800, 600);
    cam.hide();
    noStroke();
    fill(0);

   // track for color here:
    trackColor = [101, 179, 180];

}

function draw() {
    // background(0);
    image(cam, 0, 0, width, height);

    cam.loadPixels();

    let blueSticky = false;

    // xy coordinate of closent color
    let closestX = 0;
    let closestY = 0;

    for (let y = 0; y < cam.height; y++) {
        for (let x = 0; x < cam.width; x++) {
    
            let loc = (x + y * cam.width) * 4;

        //pull out colors
        let r1 = cam.pixels[loc];
        let g1 = cam.pixels[loc + 1];
        let b1 = cam.pixels[loc + 2];

        let r2 = trackColor[0];
        let g2 = trackColor[1];
        let b2 = trackColor[2];

        let d = dist(r1, g1, b1, r2, g2, b2);

        if (d < worldRecord) {
            blueSticky = true;
        }
    }
}


if (blueSticky) {
    // filter (BLUR, 10);

    for (let i = 0; i < cam.pixels.length; i += 4) {
        let red = cam.pixels[i];
        let green = cam.pixels[i + 1];
        let blue = cam.pixels[i + 2];

    let brightness = (red + green + blue) / 3;

    if (brightness < 35) {
        cam.pixels[i] = 255;
        cam.pixels[i + 1] = 0;
        cam.pixels[i + 2] = 0;
    }

    if (brightness >= 35) {
        cam.pixels[i] = 0;
        cam.pixels[i + 1] = 0;
        cam.pixels[i + 2] = 0;
    }

    }
    cam.updatePixels();
    image(cam, 0, 0, width, height);

    filter();



}
}
// if (worldRecord < 50) {
//     filter(BLUR, 10);
// }

// function mousePressed() {
//     trackColor = cam.get(mouseX, mouseY);
//     console.log(trackColor);
// }