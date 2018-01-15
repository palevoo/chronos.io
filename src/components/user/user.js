import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';

function sendFile() {
  console.log('hello');
}

class User extends Component {

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

export default User;
