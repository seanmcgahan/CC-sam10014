let video;
let faceMesh;
let faces = [];
let options = { maxNumFaces: 1, refineLandmarks: false, flipHorizontal: true };



async function setup() {
    createCanvas(800, 600);

    faceMesh = await ml5.faceMesh(options);

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();


    faceMesh.detectStart(video, gotFaces);
}

function draw() {
    image(video, 0, 0, width, height);

    for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      fill(255);
      noStroke();
      ellipse(keypoint.x, keypoint.y, 2,2);
            }
        }
    }


function gotFaces(results) {
    faces = results;
}
