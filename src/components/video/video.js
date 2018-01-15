import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './video.css';

// function hasGetUserMedia() {
//   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
//             navigator.mozGetUserMedia || navigator.msGetUserMedia);
// }
//
// if (hasGetUserMedia()) {
//   // Good to go!
// } else {
//   alert('getUserMedia() is not supported in your browser');
// }

// // Not showing vendor prefixes.

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

class Video extends Component {

  constructor(props) {
    super(props);
    console.log('VIDEO CONSTRUCTOR', this.props);
  }

  startStream () {
    window.navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
      const video = this.refs.video1;
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {
        // Ready to go. Do some stuff.
        console.log(e)
      };
    }, errorCallback);
  }

  componentDidMount() {
    this.startStream();
    console.log("VIDEO ON MOUNT",this.props);
  }

  btnStartRecording () {
    window.navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(successCallback)
      .catch(errorCallback);
  }

  btnStopRecording = () => {
    console.log('WHAT THIS', this.props);
    try {
      recordRTC.stopRecording((audioVideoWebMURL) => {
          // document.getElementById('video2').src = audioVideoWebMURL;
          console.log(audioVideoWebMURL);
          // console.log(this.props);
          this.props.addVideo(audioVideoWebMURL);
          console.log('RECRODED', this.props);

          // // video.src = audioVideoWebMURL;
          // let recordedBlob = recordRTC.getBlob();
          // recordRTC.getDataURL(function(dataURL) {
          //   // console.log(dataURL);
          // console.log(this.state);
          // console.log(this.props);
        });
      }

    catch(err) {
      console.log('No video recorded yet');
    }
  };

  render() {
    return (
      <div className="Video">
        <div className="videos">
          <video id="video1" ref="video1" autoPlay></video>
          <video id="video2" controls></video>
        </div>
        <div className="buttons">
          <button id="record2" onClick={this.btnStartRecording}>Record</button>
          <Link to="/recording">
            <button id="pause2" onClick={this.btnStopRecording}>Pause</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  addVideo: (video) => dispatch ({
    type: 'ADD_VIDEO',
    video: video
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(Video);
