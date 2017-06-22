import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { PlayButton,
  PauseButton,
  ProgressBar,
  SoundOnButton,
  SoundOffButton,
  NextButton,
  PrevButton,
  TimeMarker
 } from 'react-player-controls';

class Player extends Component {
  constructor(props){
    super(props);
    this.preVolume = 0.0;
    this.state = {playing: false,
      url: "",
      duration: 0,
      played: 0,
      playedSeconds: 0,
      seeking: false,
      progressFrequency: 1000,
    };
    this.playHandler = this.playHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
    this.prevHandler = this.prevHandler.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onStart = this.onStart.bind(this);
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
    this.setState({playedSeconds: 0, played: 0});
    console.log(this.state.played);
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
      this.setState({url: this.props.books[this.ind].audio, playing: true, played: 0});
    }else{
      console.log("nothig to play");
    }
  }
  nextHandler(){
    console.log("next");
    this.setState({played: 0});
    this.goToNext();
  }
  prevHandler(){
    this.setState({playedSeconds: 0, played: 0});
    let books = this.props.books;
    let currentUrl = this.state.url;
    let url = "";
    if(books){
      for (var i = 0; i < books.length; i++) {
        if(books[i].audio === currentUrl){
          if(i === 0){
            url = books[books.length-1].audio;
          }else {
            url = books[i-1].audio;
          }
          this.setState({url: url, playing: true, played: 0});
          break;
        }
      }
    }
  }

  onStart(){
    let secs = this.state.played;
    var id = setInterval(countSecs, 1000);
    var that = this;
    function countSecs() {
      if (!that.state.playing){
        clearInterval(id);
      }else {
        secs += 1;
        that.setState({played: secs});
      }
    }
  }

  onProgress(){
    this.onStart();
    console.log("prr");
    if (!this.state.seeking) {
      let dur = Math.floor(this.state.duration);
      // let elapsed = dur - this.state.played;
      let elapsed = this.state.played;
      this.setState({playedSeconds: elapsed});
    }
  }

  render () {
    if(!this.props.currentUser){
      return null;
    }
    let PlayPause = null;
    if (this.state.playing === true) {
      PlayPause = (
        <PauseButton onClick={this.pauseHandler}>
          <div className="Circle">
            <i className="fa fa-pause" aria-hidden="true"></i>
          </div>
        </PauseButton>
      )
    }else {
      PlayPause = (
        <PlayButton isEnabled={true} onClick={this.playHandler}>
          <div className="Circle">
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>
        </PlayButton>
      )
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
        onStart={this.onStart}
        onPause={() => this.setState({ playing: false })}
        onDuration={duration => this.setState({ duration })}
        onProgress={this.onProgress}
        />
        {PlayPause}
      <NextButton onClick={this.nextHandler} isEnabled={true}>
          <i className="fa fa-step-forward" aria-hidden="true"></i>
      </NextButton>
      <PrevButton onClick={this.prevHandler} isEnabled={true}>
        <i className="fa fa-step-backward" aria-hidden="true"></i>
      </PrevButton>
      <TimeMarker
        totalTime={this.state.duration}
        currentTime={this.state.playedSeconds}
        markerSeparator=" / "
      />
      <ProgressBar
        totalTime={this.state.duration}
        currentTime={this.state.playedSeconds}
        isSeekable={true}
        onSeek={time => this.setState(() => ({ currentTime: time }))}
        onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
        onSeekEnd={time => this.setState(() => ({ lastSeekEnd: time }))}
      >

      </ProgressBar>
    </div>
  )
  }
}
export default Player;
