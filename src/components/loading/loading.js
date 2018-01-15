import React, { Component } from 'react';
import './loading.css';
import loader from '../../Blocks.svg';


class Loading extends Component {

  render() {
    return (
      <div className="Loading">
        <p>Patience is true virtue</p>
        <img id="loader" src={loader}></img>
        <p>Uploading to the IPFS</p>
      </div>
    );
  }
}

export default Loading;
