import React, { Component } from 'react';
import logo from './infinity-symbol.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Entrance from './components/entrance/entrance.js';
import Video from './components/video/video.js';
import Recording from './components/recording/recording.js';
// import Ipfs from './components/ipfs/ipfs.js';
// import Ether from './components/ether/ether.js';
import Loading from './components/loading/loading.js';
import User from './components/user/user.js';
import Confirmation from './components/confirmation/confirmation.js';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Chronos.io</h1>
          </header>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Entrance}/>
                <Route path="/video" component={Video}/>
                <Route path="/recording" component={Recording}/>
                <Route path="/loading" component={Loading}/>
                <Route path="/user" component={User}/>
                <Route path="/happyending" component={Confirmation}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
