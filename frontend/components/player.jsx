import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton, PauseButton } from 'react-player-controls';

class Player extends Component {
  constructor(props){
    super(props);
    this.state = {playing: false};
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
  }
  playHandler(){
    this.setState({playing: true});
  }
  pauseHandler(){
    this.setState({playing: false});
  }

  render () {
    return (
    <div>
      <ReactPlayer
      url='https://s3-us-west-1.amazonaws.com/project-dev/audiobooks/audios/000/000/003/original/True_Stories.mp3'
      className="Player"
      height="80px"
      width="100%"
      playing={this.state.playing}
      />
    <PauseButton onClick={this.pauseHandler}/>
    <PlayButton isEnabled={true} onClick={this.playHandler} />
  </div>
  );
  }
}
export default Player;
