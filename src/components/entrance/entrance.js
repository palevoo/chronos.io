import React, { Component } from 'react';
import './entrance.css';
import { Link } from 'react-router-dom';
import VideoList from '../videolist/videolist.js';

class Entrance extends Component {

  render() {
    return (
      <div className="Entrance, container">
        <h2>Welcome to the Chronos.io, a time travel app</h2>
        <p>Designed in a decentralized manner, allowing you to record a video message, and upload it to the IPFS.</p>
        <p>Join this week's Time Travelers:</p>
        <VideoList />
        <Link to="/video">
          <button id="enter">Enter</button>
        </Link>
      </div>
    );
  }
}

export default Entrance;
