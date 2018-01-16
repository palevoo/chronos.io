import React, { Component } from 'react';
import './entrance.css';
import { Link } from 'react-router-dom';

class Entrance extends Component {

  render() {
    return (
      <div className="Entrance, container">
        <h2>Welcome to the Chronos.io, a time travel app</h2>
        <p>Designed in a decentralized manner, allowing you to record a video message, and upload it to the IPFS</p>
        <p>Ethereum smart contract will make sure, that you cannot retrieve it before the teleportation date.</p>
        <Link to="/video">
          <button id="enter">Enter</button>
        </Link>
      </div>
    );
  }
}

export default Entrance;
