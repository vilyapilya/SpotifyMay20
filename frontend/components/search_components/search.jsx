import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class BookSearch{
  constructor(props){
    super(props);
    this.state = {title: ""};
    this.handleTitleInput = this.handleTitleInput.bind(this);
  }

  handleTitleInput(e){
    e.preventDefault();
    const title = document.getElementById("TitleSearch").value;
    if (title === "") {
      this.renderResults([]);
      return;
    }

    this.setState({title});
  }

  render(){
    return(
      <input type="text" id="TitleSearch" onChange={handleTitleInput}></input>
    )
  }

}
