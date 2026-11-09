let video;
let bodyPose;
let poses = [];
let connections;



async function setup() {
    createCanvas(800, 600);

    bodyPose = await ml5.bodyPose();

    video = createCapture(VIDEO);
    video.size(800, 600);
    video.hide();


    bodyPose.detectStart(video, gotPoses);
}

function draw() {
    image(video, 0, 0, width, height);

    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        for (let j = 0; j < pose.keypoints.length; j++) {
            let keypoint = pose.keypoints[j];
            if (keypoint.confidence > 0.1) {
                fill(255);
                noStroke();
                circle(keypoint.x, keypoint.y, 10);
            }
        }
    }
}


function gotPoses(results) {
    poses = results;
}