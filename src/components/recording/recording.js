import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './recording.css';

class Recording extends Component {

  constructor(props) {
    super(props);
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
  video: state.video,
})

export default connect(mapStateToProps)(Recording);
