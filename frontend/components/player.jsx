import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton,
  PauseButton,
  ProgressBar, SoundOnButton, SoundOffButton,
  NextButton } from 'react-player-controls';

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
    let ar = [];
    if(!this.props.currentUser){
      return null;
    }
    if(this.props.books.length > 0){
      this.props.books.forEach((b) => {
        if(b.audio !== "/audios/original/missing.png"){
          ar.push(b.audio);
        }
      })
    }
    let audio_url = this.props.book.audioFile_url;
    return (
    <div>
        <ReactPlayer
        className="Player"
        height="65px"
        width="100%"
        url={[{src: ar[0]}, {src: ar[1]}]}
        onEnded={() => this.setState({ playing: true, url: next_url})}
        />
      <PauseButton onClick={this.pauseHandler}/>
      <PlayButton isEnabled={true} onClick={this.playHandler} />
      <NextButton isEnabled={this.state.isEnabled} onClick={() => alert('Go to next')}/>
      <ProgressBar></ProgressBar>
    </div>
    )
  }
}
export default Player;
