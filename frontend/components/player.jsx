import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton, PauseButton, ProgressBar, SoundOnButton, SoundOffButton } from 'react-player-controls';

class Player extends Component {
  constructor(props){
    super(props);
    this.preVolume = 0.0;
    this.state = {playing: false};
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.mute.bind(this);
  }
  playHandler(){
    this.setState({playing: true, volume: 0.6});
  }
  pauseHandler(){
    this.setState({playing: false});
  }
  mute(){
    thisVolume = this.state.volume;
    this.setState({volume: 0.0});
  }
  unmute(){
    this.setState({volume: prevVolume});
  }
  render () {
    if(!this.props.currentUser){
      return null;
    }
    return (
    <div>
        <ReactPlayer
        url="app/assets/audio/sample.mp3"
        className="Player"
        height="80px"
        width="100%"
        playing={this.state.playing}
        />
      <PauseButton onClick={this.pauseHandler}/>
      <PlayButton isEnabled={true} onClick={this.playHandler} />
      <ProgressBar></ProgressBar>
      <SoundOnButton onClick={this.mute}></SoundOnButton>
      <SoundOffButton onClick={this.unmute}></SoundOffButton>
    </div>
    )
  }
}
export default Player;
