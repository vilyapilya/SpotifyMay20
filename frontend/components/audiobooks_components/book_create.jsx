import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';

class BookCreate extends Component {
  constructor(props){
    super(props);
    this.user_id = parseInt(this.props.user_id);
    this.state = {title: "", author: "", description: "", audio_url: "",
    image_url: "", user_id: this.user_id};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAudioURL = this.handleAudioURL.bind(this);
    this.handleImageURL = this.handleImageURL.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    this.props.bookCreate(this.state)
    .then((book)=>{this.props.history.push("/audiobooks")});
  }

  handleTitle(e){
    e.preventDefault();
    const title = document.getElementById("AddTitle").value;
    this.setState({title});
  }

  handleAuthor(e){
    e.preventDefault();
    const author = document.getElementById("AddAuthor").value;
    this.setState({author});
  }

  handleDescription(e){
    e.preventDefault();
    const description = document.getElementById("AddDesc").value;
    this.setState({description});
  }

  handleAudioURL(e){
    e.preventDefault();
    const audio_url = document.getElementById("AddAudioURL").value;
    this.setState({audio_url});
  }

  handleImageURL(e){
    e.preventDefault();
    const image_url = document.getElementById("AddImageURL").value;
    this.setState({image_url});
  }

  render(){
    return(
      <form className="createBook" onSubmit={this.handleAdd}>
          <h1 id="addBookHeader"> Create New AudioBook </h1>

          <h1 id="Title"> Title </h1>
          <input type="text" id="AddTitle" value={this.state.title}
            onChange={this.handleTitle} className="CreateForm">
          </input>
          <br/>

          <h1 id="AddDesc"> description </h1>
          <textarea id="body" value={this.state.description}
            onChange={this.handleDescription} className="CreateForm">
          </textarea>

          <br/>

          <h1 id="AddAuthorName"> Author </h1>
          <input type="text" id="AddAuthor" value={this.state.author}
            onChange={this.handleAuthor} className="CreateForm">
          </input>
          <br/>

          <h1 id="AudioUrl"> AudioFile </h1>
          <input type="text" id="AddAudioURL" value={this.state.audio_url}
            onChange={this.handleAudioURL} className="CreateForm">
          </input>
          <br/>

          <h1 id="ImageUrl"> Image </h1>
          <input type="text" id="AddImageURL" value={this.state.image_url}
            onChange={this.handleImageURL} className="CreateForm">
          </input>
          <br/>

          <button id="bookCreateButton">
            add audiobook
          </button>
          <NavLink to="/audiobooks" id="cancel"> cancel </NavLink>
    </form>
    )
  }
}
export default BookCreate;
