// lets create script tag



let scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = "https://ygesture.netlify.app/JS/handTracking.js";

document.body.prepend(scriptTag);

// create async Function

const modelParams = {
    flipHorizontal: true, // flip e.g for video
    imageScaleFactor: 0.7, // reduce input image size .
    maxNumBoxes: 20, // maximum number of boxes to detect
    iouThreshold: 0.5, // ioU threshold for non-max suppression
    scoreThreshold: 0.79, // confidence threshold for predictions.
};

navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

//   select everything on html

//   lets create a video
let canvasId = document.createElement('canvas');
canvasId.id = "canvas";
document.body.prepend(canvasId);


let videoOne = document.createElement("video");
videoOne.id = "video";

document.body.prepend(videoOne);


const video = document.querySelector("#video");

video.style = `position: absolute; bottom:10px; z-index:10000; bottom-center:10px; width:400px`;
const canvas = document.querySelector("#canvas");

canvas.style.width = "0px";
canvas.style.height = "0px";
const context = canvas.getContext("2d");
let model;
let myRange = document.querySelector("#myRange");
// video
let videoYt = document.querySelectorAll("video")[1];
var videoInterval;


// c starting handtracking
setTimeout(() => {
    handTrack.startVideo(video).then((status) => {
        if (status) {
            navigator.getUserMedia(
                {
                    video: {},
                },
                (stream) => {
                    video.srcObject = stream;

                    videoInterval = setInterval(runDetection, 800);
                },
                (err) => {
                    console.log(err, "relaod browser");




                }
            );
        }
    });

    function runDetection() {

        model.detect(video).then((prediction) => {

            try {


                let xValue = prediction[1].bbox[0] / 5;
                let yValue = prediction[1].bbox[1] / 3;
                let skip = 5;
                let volume = (1 / 100) * 3;




                function skipping() {
                    if (xValue >= 50) {

                        videoYt.currentTime -= skip--;
                    } else if (xValue <= 49) {
                        videoYt.currentTime += skip++;


                    }
                }
                skipping();


            } catch (error) {
                console.log(error);

            }
        });




    }

    handTrack.load(modelParams).then((lmodel) => {
        model = lmodel;
    });
}, 4000);