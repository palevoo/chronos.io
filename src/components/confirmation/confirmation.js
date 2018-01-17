import React, { Component } from 'react';
import thefuture from '../../giphy.gif';
import './confirmation.css';


class Confirmation extends Component {

  render() {
    return (
      <div className="Confirmation, container">
        <h2>Congratulations!</h2>
        <img src={thefuture} alt="Back to the Future"></img>
        <p>See you at {JSON.stringify(new Date(Date.now() + 315400000010))}</p>
      </div>
    );
  }
}

export default Confirmation;
