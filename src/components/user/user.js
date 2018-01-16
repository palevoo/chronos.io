import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function sendFile() {
  console.log('hello');
}

class User extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="User">
        {/* <p>Send Message to the future</p> */}
        {/* <input name="image" accept="image/*" type="file" className="file"></input> */}
        <p>Reciever's Email</p>
        <input id="email" type="email"></input>
        <p>Teleportation date</p>
        <input id="date" type="date"></input>
        <button id="upload" onClick={sendFile}>Upload</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
  file: state.file,
  hash: state.hash,
})

const mapDispatchToProps = (dispatch) => ({
  addVideo: (video) => dispatch ({
    type: 'ADD_VIDEO',
    video: video
  }),
  addFile: (file) => dispatch ({
    type: 'ADD_FILE',
    file: file
  }),
  addHash: (hash) => dispatch ({
    type: 'ADD_HASH',
    file: hash
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
