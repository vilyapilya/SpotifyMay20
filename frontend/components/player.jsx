import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton, PauseButton, ProgressBar } from 'react-player-controls';

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
    let audioUrl = this.props.book.audioFile_url;
    // if(audioUrl){
    //   audioUrl = audioUrl.substring(0, audioUrl.indexOf('?'));
    //   audioUrl = "https" + audioUrl.slice(4);
    // }
    return (
    <div>
      <ReactPlayer
      url={audioUrl}
      className="Player"
      height="80px"
      width="100%"
      playing={this.state.playing}
      />
    <PauseButton onClick={this.pauseHandler}/>
    <PlayButton isEnabled={true} onClick={this.playHandler} />
    <ProgressBar></ProgressBar>
  </div>
  );
  }
}
export default Player;
