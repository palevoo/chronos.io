import React, { Component } from 'react';
import logo from './infinity-symbol.svg';
import './App.css';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Video from './components/video/video.js';
import VideoMdn from './components/videoMDN/videomdn.js';
import User from './components/user/user.js';
import Ipfs from './components/ipfs/ipfs.js';
import Ether from './components/ether/ether.js';



class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Chronos.io</h1>
          </header>
          <Video />
          <Ether />
          <Ipfs />
          <User />
        </div>
    );
  }
}

export default App;
