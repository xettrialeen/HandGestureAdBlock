// // lets create script tag



// let scriptTag = document.createElement('script');
// scriptTag.type = 'text/javascript';
// scriptTag.src = "https://ygesture.netlify.app/JS/handTracking.js";

// document.body.prepend(scriptTag);

// // create async Function

// const modelParams = {
//     flipHorizontal: true, // flip e.g for video
//     imageScaleFactor: 0.7, // reduce input image size .
//     maxNumBoxes: 20, // maximum number of boxes to detect
//     iouThreshold: 0.5, // ioU threshold for non-max suppression
//     scoreThreshold: 0.79, // confidence threshold for predictions.
// };

// navigator.getUserMedia =
//     navigator.getUserMedia ||
//     navigator.webkitGetUserMedia ||
//     navigator.mozGetUserMedia ||
//     navigator.msGetUserMedia;

// //   select everything on html

// //   lets create a video
// let canvasId = document.createElement('canvas');
// canvasId.id = "canvas";
// document.body.prepend(canvasId);


// let videoOne = document.createElement("video");
// videoOne.id = "video";

// document.body.prepend(videoOne);


// const video = document.querySelector("#video");

// video.style = `position: absolute; bottom:10px; right:10px; width:400px`;
// const canvas = document.querySelector("#canvas");

// canvas.style.width = "0px";
// canvas.style.height = "0px";
// const context = canvas.getContext("2d");
// let model;
// let myRange = document.querySelector("#myRange");
// // video
// let videoYt = document.querySelector("#video1");
// var videoInterval;


// // c starting handtracking
// setTimeout(() => {
//     handTrack.startVideo(video).then((status) => {
//         if (status) {
//             navigator.getUserMedia(
//                 {
//                     video: {},
//                 },
//                 (stream) => {
//                     video.srcObject = stream;

//                     videoInterval = setInterval(runDetection, 800);
//                 },
//                 (err) => {
//                     console.log(err, "relaod browser");




//                 }
//             );
//         }
//     });

//     var handStat = false;
//     function runDetection() {

//         model.detect(video).then((prediction) => {

//             try {


//                 if (prediction[1]) {
//                     console.log("Hand Detecting");
//                     handStat = true;


//                 } else {

//                     console.log("Hand Not Detecting");
//                 }


//             } catch (error) {
//                 console.log(error);

//             }
//         });


//         if (handStat === true) {
//             document.querySelectorAll('.adalytics_ad').forEach((e) => {

//                 e.style = `display: none!important`;
//             });
//         } else {
//             document.querySelectorAll('.adalytics_ad').forEach((e) => {

//                 e.style = `display: block !important`;
//             });
//         }


//     }

//     handTrack.load(modelParams).then((lmodel) => {
//         model = lmodel;
//     });
// }, 4000);