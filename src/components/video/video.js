import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './video.css';
const toBuffer = require('blob-to-buffer')
const toArrayBuffer = require('to-arraybuffer')

let recordRTC;
const mediaConstraints = { video: true, audio: true };
const recordingOptions = {mimeType: 'video/webm;codecs=vp9', bitsPerSecond: 128000 };

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
} else {
  alert('getUserMedia() is not supported in your browser');
}

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

  startStream () {
    window.navigator.getUserMedia(mediaConstraints, (localMediaStream) => {
      const video = this.refs.video;
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
      <div className="Video, container">
          <video ref="video" autoPlay muted></video>
        <div className="buttons">
          <button onClick={this.btnStartRecording}>Record</button>
          <button onClick={this.btnStopRecording}>Stop</button>
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
