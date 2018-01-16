import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './video.css';
var toBuffer = require('blob-to-buffer')
var toArrayBuffer = require('to-arraybuffer')

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}

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
    console.log(error);
}

class Video extends Component {

  state = {
    videoEnded: false
  }

  constructor(props) {
    super(props);
  }

  startStream () {
    window.navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
      const video = this.refs.video1;
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {
        console.log(e)
      };
    }, errorCallback);
  }

  componentDidMount() {
    this.startStream();
  }

  btnStartRecording () {
    window.navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(successCallback)
      .catch(errorCallback);
  }

  btnStopRecording = () => {
    try {
      recordRTC.stopRecording((audioVideoWebMURL) => {
          this.props.addVideo(audioVideoWebMURL)
          let blob = recordRTC.getBlob();
          let file = new File([blob], 'recording.webm', {
              type: 'video/webm'
          });
          toBuffer(blob, (err, buffer) => {
            if (err) throw err;
            this.props.addFile(toArrayBuffer(buffer));
          })
          this.setState({
            videoEnded: true
          })
        })
      }
    catch(err) {
      console.log('No video recorded yet');
    }
  };

  redirectIfNeeded() {
    if (this.state.videoEnded) {
      return <Redirect to="/recording" />
    }
  }

  render() {

    return (
      <div className="Video">
        <div className="videos">
          <video id="video1" ref="video1" autoPlay></video>
        </div>
        <div className="buttons">
          <button id="record2" onClick={this.btnStartRecording}>Record</button>
          <button id="pause2" onClick={this.btnStopRecording}>Stop</button>
          {this.redirectIfNeeded()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  file: state.file
})

const mapDispatchToProps = (dispatch) => ({
  addVideo: (video) => dispatch ({
    type: 'ADD_VIDEO',
    video: video
  }),
  addFile: (file) => dispatch ({
    type: 'ADD_FILE',
    file: file
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Video);
