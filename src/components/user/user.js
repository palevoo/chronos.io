import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class User extends Component {

  constructor(props) {
    super(props);
    // this.emailInput = '';
  }
  state = {
    emailInput: '',
  };
  test(email) {
    // console.log(email.input.value);
    console.log(email.input.value);
  }
  finalTouch(email, hash) {
    console.log(email.input.value, hash);
    fetch('http://localhost:3003/happyending', {
      method:'POST',
      body: JSON.stringify({
        email: email.input.value,
        hash: hash
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <div className="User">
        <h2>Almost a time traveler</h2>
        <p>Reciever's Email</p>
        <input id="email" type="text" ref={(input) => { this.state.emailInput = input; }} ></input>
        <p>See you in <strong>10</strong> years</p>
        {/* <input id="date" type="date" ref={(input) => { this.dateInput = input; }} ></input> */}
        {/* <button id="upload" onClick={() => this.finalTouch(this.emailInput, this.props.hash)} >Teleport</button> */}
        <button id="upload" onClick={() => this.test(this.emailInput)} >Test</button>

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
