import React, { Component } from 'react';
import thefuture from '../../giphy.gif'
import './confirmation.css';

class Confirmation extends Component {

  render() {
    return (
      <div className="Confirmation">
        <h2>Congratulations!</h2>
        <img src={thefuture}></img>
        <p>See you in 10 years</p>
      </div>
    );
  }
}

export default Confirmation;