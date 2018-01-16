import React, { Component } from 'react';
import './loading.css';
import loader from '../../Blocks.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const IPFS = require('ipfs');
const node = new IPFS({ repo: String(Math.random() + Date.now()) });
const Buffer = require('buffer/').Buffer;

node.once('ready', () => console.log('IPFS node is ready'))

class Loading extends Component {

  state = {
    IPFS: false,
  }

  sendFile() {
    const buf = Buffer(this.props.file) // Convert data into buffer
    node.files.add(buf, (err, result) => { // Upload buffer to IPFS
      if(err) {
        console.error(err);
        return;
      }
      let hash = `https://ipfs.io/ipfs/${result[0].hash}`
      this.props.addHash(hash);
      console.log(`Hash --> ${hash}`)
    })
    this.setState({
      IPFS: true
    })
  }

  componentDidMount() {
    setTimeout( () => this.sendFile(), 3000);
  }

  redirectIfNeeded() {
    if (this.state.IPFS) {
      return <Redirect to="/teleport" />
    }
  }

  render() {
    return (
      <div className="Loading, container">
        <p>Patience is true virtue</p>
        <img id="loader" src={loader} alt="loader"></img>
        <p>Uploading to the IPFS</p>
        {this.redirectIfNeeded()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  file: state.file,
  hash: state.hash,
})

const mapDispatchToProps = (dispatch) => ({
  addHash: (hash) => dispatch ({
    type: 'ADD_HASH',
    hash: hash
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
