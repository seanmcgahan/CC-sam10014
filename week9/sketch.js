let video;
let bodyPose;
let poses = [];
let connections;
let img;
let shirt;




async function setup() {
    createCanvas(800, 600);

    img = await loadImage('assets/test2.png');
    shirt = await loadImage('assets/shirt.png');

    bodyPose = await ml5.bodyPose({ flipped: true });

    video = createCapture(VIDEO, { flipped: true });
    video.size(800, 600);
    video.hide();


    bodyPose.detectStart(video, gotPoses);

    connections = bodyPose.getConnections();
}

function draw() {
    // image(video, 0, 0, width, height);
    background(0);

    // skeleton
//  for (let i = 0; i < poses.length; i++) {
//     let pose = poses[i];
//     for (let j = 4; j < connections.length; j++) {
//       let pointAIndex = connections[j][0];
//       let pointBIndex = connections[j][1];
//       let pointA = pose.keypoints[pointAIndex];
//       let pointB = pose.keypoints[pointBIndex];
//       // draw line confidence
//       if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
//         stroke(255);
//         strokeWeight(2);
//         line(pointA.x, pointA.y, pointB.x, pointB.y);
//       }
//     }
//   }

// points
    // for (let i = 0; i < poses.length; i++) {
    //     let pose = poses[i];
    //     for (let j = 0; j < pose.keypoints.length; j++) {
    //         let keypoint = pose.keypoints[j];
    //         if (keypoint.confidence > 0.5) {
    //             fill(255);
    //             noStroke();
    //             circle(keypoint.x, keypoint.y, 10);
    //         }
    //     }
    // }

    // scale with distance from camera (using distance between points)
    if (poses.length > 0) {
        let pose = poses[0];
        let nose = pose.keypoints[0];

        let leftEye = pose.keypoints[1];
        let rightEye = pose.keypoints[2];
        let leftShoulder = pose.keypoints[5];
        let rightShoulder = pose.keypoints[6];
        
        let d = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
        let imgSize = map(d, 20, 80, 200, 700, true);

        let d2 = dist(leftShoulder.x, leftShoulder.y, rightShoulder.x, rightShoulder.y);
        let shirtSize = map(d2, 40, 100, 200, 600, true);

        push();
        imageMode(CENTER);
        translate(nose.x, nose.y);
        image(img, 0, 0, imgSize, imgSize);
        pop();

        push();
        imageMode(CENTER);
        translate((leftShoulder.x + rightShoulder.x) / 2, (leftShoulder.y + rightShoulder.y) / 2);
        image(shirt, 0, 50, shirtSize, shirtSize);
        pop();
        
    }
}


function gotPoses(results) {
    poses = results;
}

function gotHands(results) {
    hands = results;
}