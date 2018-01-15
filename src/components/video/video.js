import React, { Component } from 'react';
import RecordRTC from 'recordrtc';

import './video.css';

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}

// // Not showing vendor prefixes.
navigator.getUserMedia({video: true, audio: false}, function(localMediaStream) {
  const video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);

  // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
  // See crbug.com/110938.
  video.onloadedmetadata = function(e) {
    // Ready to go. Do some stuff.
    console.log(e)
  };
}, errorCallback);

//RecordRTC
let recordRTC;
let video = document.querySelector('video');
let video1 = document.getElementById('video1');

const mediaConstraints = { video: true, audio: true };
const recordingOptions = {mimeType: 'video/webm\;codecs=vp9', bitsPerSecond: 128000 };

function successCallback(stream) {
    recordRTC = RecordRTC(stream, recordingOptions);
    recordRTC.startRecording();
}

function errorCallback(error) {
    // maybe another application is using the device
    console.log(error);
}

function btnStartRecording () {
  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    // .then(renderVideo)
    .then(successCallback)
    .catch(errorCallback);
}

function btnStopRecording () {
  try {
    recordRTC.stopRecording(function (audioVideoWebMURL) {
        document.getElementById('video2').src = audioVideoWebMURL;
        // video.src = audioVideoWebMURL;
        let recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function(dataURL) {
          console.log(dataURL);
        });
    });
  }
  catch(err) {
    console.log('No video recorded yet');
  }
};

class Video extends Component {

  render() {
    return (
      <div className="Video">
        <p>Welcome to the <strong>Chronos</strong>, here you can travel in time, all you have to do is record a video message to future yourself.. P.S. apologies, but travelling back in time is still in development..</p>
        <div className="videos">
          <video id="video1" autoPlay></video>
          <video id="video2" controls></video>
        </div>
        <div className="buttons">
          <button id="record2" onClick={btnStartRecording}>Record</button>
          <button id="pause2" onClick={btnStopRecording}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Video;
