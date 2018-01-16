import React, { Component } from 'react';
import './user.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class User extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    postedToBackEnd: false,
  };

  finalTouch(email, hash) {
    console.log(email.value, hash);
    fetch('http://localhost:3003/happyending', {
      method:'POST',
      body: JSON.stringify({
        email: email.value,
        hash: hash
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.setState({
      postedToBackEnd: true
    })
  }

  redirectIfNeeded() {
    if (this.state.postedToBackEnd) {
      return <Redirect to="/happyending" />
    }
  }

  render() {
    return (
      <div className="User">
        <h2>Almost a time traveler</h2>
        <p>Reciever's Email</p>
        <input id="email" type="text" ref={(input) => { this.emailInput = input }} ></input>
        <p>See you in <strong>10</strong> years</p>
        <button id="upload" onClick={() => this.finalTouch(this.emailInput, this.props.hash)} >Teleport</button>
        {this.redirectIfNeeded()}
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
