import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import './videomdn.css';

let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
let constraints = { audio: true, video: true };
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   console.log('getUserMedia supported.');
   navigator.mediaDevices.getUserMedia ((constraints),
      // Success callback
      function(stream) {
           var mediaRecorder = new MediaRecorder(stream);

           var myStream = mediaRecorder.stream;
           console.log(myStream);
      })
      // Error callback
      .catch(function(err) {
         console.log('The following gUM error occured: ' + err);
      });
} else {
  console.log('getUserMedia not supported on your browser!');
}

function  record () {
  // let res =  MediaRecorder.start(5000)
  console.log(MediaRecorder.start(5000));
}
function  pause () {
  // let res =  MediaRecorder.start(5000)
  console.log(RecordRTC.Whammy);
}
// let mediaRecorder = new MediaRecorder(stream);



class VideoMdn extends Component {

  render() {
    return (
      <div className="VideoMdn">
        <p>Video goes here</p>
        <video id="preview" autoPlay muted></video>
        <button id="record" onClick={record}>Record</button>
        <button id="Pause" onClick={pause}>Pause</button>

      </div>
    );
  }
}

export default VideoMdn;
