import React, { Component } from 'react';
import './entrance.css';
import { Link } from 'react-router-dom';

class Entrance extends Component {

  constructor(props) {
    super(props);
    console.log('PROPS',props);
  }

  render() {
    return (
      <div className="Entrance">
        <h2>Welcome to the Chronos.io, a time travel app</h2>
        <p>Designed in a decentralized manner, allowing you to record video message, upload it to IPFS</p>
        <p>Ethereum smart contract will make sure, that you cannot retrieve it before the teleportation date.</p>
        <Link to="/video">
          <button id="enter">Enter</button>
        </Link>
      </div>
    );
  }
}

export default Entrance;
