import React, { Component } from 'react';
import './loading.css';
import loader from '../../Blocks.svg';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const IPFS = require('ipfs');
const node = new IPFS({ repo: String(Math.random() + Date.now()) });
const Buffer = require('buffer/').Buffer;

node.once('ready', () => console.log('IPFS node is ready'))

class Loading extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  state = {
    IPFS: false,
  }

  sendFile() {
    console.log('Uploading recording to IPFS');
    const buf = Buffer(this.props.file) // Convert data into buffer
    node.files.add(buf, (err, result) => { // Upload buffer to IPFS
      if(err) {
        console.error(err);
        return;
      }
      let hash = `https://ipfs.io/ipfs/${result[0].hash}`
      console.log(this.props.addHash);
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
      return <Redirect to="/user" />
    }
  }

  render() {
    return (
      <div className="Loading">
        <p>Patience is true virtue</p>
        <img id="loader" src={loader}></img>
        <p>Uploading to the IPFS</p>
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
    hash: hash
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
