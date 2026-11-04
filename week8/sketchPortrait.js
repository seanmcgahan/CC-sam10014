let cam;

let trackColor; // tracking for blue sticky note

let trackColor2; // tracking for pink sticky note

let worldRecord = 20 // threshold for color distance match

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
    trackColor = [101, 179, 180]; // the specifc rgb value of my blue sticky note
    trackColor2 = [249, 132, 157]; // the specifc rgb value of my pink sticky note

}

function draw() {
    // background(0);
    image(cam, 0, 0, width, height);

    cam.loadPixels();

    let blueSticky = false;
    let pinkSticky = false;

    // xy coordinate of closest color (followed the code from recording in class to build out this basic logic)
    let closestX = 0;
    let closestY = 0;

    for (let y = 0; y < cam.height; y++) {
        for (let x = 0; x < cam.width; x++) {
    
            let loc = (x + y * cam.width) * 4;

        //pull out colors
        let r1 = cam.pixels[loc];
        let g1 = cam.pixels[loc + 1];
        let b1 = cam.pixels[loc + 2];

        // for blue sticky note
        let r2 = trackColor[0];
        let g2 = trackColor[1];
        let b2 = trackColor[2];

        // for pink sticky note
        let r3 = trackColor2[0];
        let g3 = trackColor2[1];
        let b3 = trackColor2[2];

        let d = dist(r1, g1, b1, r2, g2, b2); // blue sticky note
        let d2 = dist(r1, g1, b1, r3, g3, b3); // pink sticky note

        if (d < worldRecord) {
            blueSticky = true;
        }
        if (d2 < worldRecord) {
            pinkSticky = true;
        }
    }
}


if (blueSticky) {

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

    // filter();
}


if (pinkSticky) {
    for (let i = 0; i < cam.pixels.length; i += 4) {
        let red = cam.pixels[i];
        let green = cam.pixels[i + 1];
        let blue = cam.pixels[i + 2];

        let brightness = (red + green + blue) / 3;

        if (brightness < 35) {
            cam.pixels[i] = 0;
            cam.pixels[i + 1] = 0;
            cam.pixels[i + 2] = 255;
        }

        if (brightness >= 35) {
            cam.pixels[i] = 255;
            cam.pixels[i + 1] = 255;
            cam.pixels[i + 2] = 255;
        }
    }
    cam.updatePixels();
    image(cam, 0, 0, width, height);
}
}
