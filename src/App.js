import React, { Component } from 'react';
import logo from './infinity-symbol.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Entrance from './components/entrance/entrance.js';
import VideoList from './components/videolist/videolist.js';
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
            <div className="main">
              <Switch>
                <Route exact path="/" component={Entrance}/>
                <Route path="/videolist" component={VideoList}/>
                <Route path="/video" component={Video}/>
                <Route path="/recording" component={Recording}/>
                <Route path="/loading" component={Loading}/>
                <Route path="/teleport" component={User}/>
                <Route path="/happyending" component={Confirmation}/>
              </Switch>
            </div>
          </Router>
          <footer className="App-footer">
            <a className="github-button" href="https://github.com/palevoo/chronos.io/issues" data-show-count="true" aria-label="Issue palevoo/chronos.io on GitHub">Issue</a>
          </footer>
        </div>
    );
  }
}

export default App;
