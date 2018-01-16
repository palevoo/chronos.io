import React, { Component } from 'react';
import './user.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class User extends Component {

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
      <div className="User, container">
        <h2>Almost a time traveler</h2>
        <p>Reciever's Email</p>
        <input id="email" type="text" ref={(input) => { this.emailInput = input }} ></input>
        <button id="upload" onClick={() => this.finalTouch(this.emailInput, this.props.hash)} >Teleport</button>
        {this.redirectIfNeeded()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hash: state.hash
})

export default connect(mapStateToProps)(User);
