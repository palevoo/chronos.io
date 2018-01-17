import React, { Component } from 'react';
import './videolist.css';

class VideoList extends Component {

  //
  // state = {
  //   videoList: [],
  // }
  constructor() {
    super();
    // this.fetchVideos();
    this.state = {
      videoList: [
        {
          _id: null,
          email: null,
          date: null,
          hash: '',
        }
      ],
    };
    console.log(this.state, 'LOADED');

  }

  fetchVideos() {
    fetch('http://localhost:3003/videos')
    .then(response => response.json())
    .then((videos) => {
      console.log(videos, 'VIDEOS');
      this.setState({
        videoList: videos
      })
    })
    .catch(error => console.error(error));
  }

  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    return (
      <div className="VideoList">
        {this.state.videoList.map((el) => (
          <video width="320" height="240" className="videos" autoPlay muted loop src={el.hash} key={el._id}></video>
        ))}
      </div>
    )
  }
}

export default VideoList;
