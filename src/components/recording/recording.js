import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import { Link } from 'react-router-dom';

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
        <video id="recording" ref="recoding" controls></video>
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

export default Recording;
