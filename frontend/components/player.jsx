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
    this.state = {playing: true, url: ""};
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.mute.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.ind = 0;
  }

  playHandler(){
    this.pauseHandler();
    if(!this.props.books || this.props.books.length < 1){
      return null;
    }
    for (var i = 0; i < this.props.books.length; i++) {
      if (this.props.books[i].id === this.props.book.id) {
        break;
      }
    }

    if(i < this.props.books.length){
      this.ind = i;
    }else {
      this.ind = 0;
    }
    let missing = "/missing.png";
    if (this.props.books[this.ind].audio.includes(missing)){
      console.log("No audio file");
    }else {
      this.setState({url: this.props.books[this.ind].audio, playing: true});
    }
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

  goToNext(){
    if(!this.props.books || this.props.books.length < 1){
      this.ind = 0;
      return null;
    }
    let count = 0;
    let missing = "/missing.png";
    while(count < this.props.books.length){
      this.ind += 1;
      if (this.ind >= this.props.books.length) {
        this.ind = 0;
      }
      if (!this.props.books[this.ind].audio.includes(missing)){
        break;
      }
      count += 1;
    }

    if(count < this.props.books.length){
      this.setState({url: this.props.books[this.ind].audio, playing: true});
    }else{
      console.log("nothig to play");
    }
  }

  render () {
    if(!this.props.currentUser){
      return null;
    }
    return (
    <div>
        <ReactPlayer
        ref={player => { this.player = player }}
        className="Player"
        height="65px"
        width="100%"
        url={this.state.url}
        playing={this.state.playing}
        onEnded={this.goToNext}
        onStart={() => console.log('onStart')}
        onPause={() => this.setState({ playing: false })}
        />
      <PauseButton onClick={this.pauseHandler}/>
      <PlayButton isEnabled={true} onClick={this.playHandler} />
    </div>
  )
  }
}
export default Player;
