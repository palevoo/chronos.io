import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './recording.css';

class Recording extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    // this.startStream();
    console.log("RECORDING ON MOUNT",this.props);
  }

  render() {
    return (
      <div className="Recording">
        <video id="recording" ref="recoding" controls src={this.props.video}></video>
        <Link to="/video">
          <button id="record">Try Again</button>
        </Link>
        <Link to="/loading">
          <button id="upload">Save</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video
})

const mapDispatchToProps = (dispatch) => ({
  addVideo: (video) => dispatch ({
    type: 'ADD_VIDEO',
    video: video
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Recording);
