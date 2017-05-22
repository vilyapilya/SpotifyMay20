import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';


class BookEdit extends Component {
  constructor(props){
    super(props);
    let id = this.props.match.params.bookId;
    let title = this.props.match.params.title;
    let author = this.props.match.params.author;
    let description = this.props.match.params.description;
    let audio_url = this.props.match.params.audio_url;
    let image_url = this.props.match.params.image_url;
    this.user_id = parseInt(this.props.user_id);
    this.state = {
      id: id,
      title: title,
      author: author,
      description: description,
      audio_url: audio_url,
      image_url: image_url,
      user_id: this.user_id};

    this.handleEdit = this.handleEdit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAudioURL = this.handleAudioURL.bind(this);
    this.handleImageURL = this.handleImageURL.bind(this);
  }

  handleEdit(e){
    e.preventDefault();
    this.props.editBook(this.state)
    .then((book)=>{this.props.history.push("/audiobooks")});
  }

  handleTitle(e){
    e.preventDefault();
    const title = document.getElementById("EditTitle").value;
    this.setState({title});
  }

  handleAuthor(e){
    e.preventDefault();
    const author = document.getElementById("EditAuthor").value;
    this.setState({author});
  }

  handleDescription(e){
    e.preventDefault();
    const description = document.getElementById("EditDesc").value;
    this.setState({description});
  }

  handleAudioURL(e){
    e.preventDefault();
    const audio_url = document.getElementById("EditAudioURL").value;
    this.setState({audio_url});
  }

  handleImageURL(e){
    e.preventDefault();
    const image_url = document.getElementById("EditImageURL").value;
    this.setState({image_url});
  }

  render(){
    return(
      <form className="createBook" onSubmit={this.handleEdit}>
          <h1 id="addBookHeader"> Create New AudioBook </h1>

          <h1 id="Title"> Title </h1>
          <input type="text" id="EditTitle" value={this.state.title}
            onChange={this.handleTitle} className="CreateForm">
          </input>
          <br/>

          <h1 id="Desc"> description </h1>
          <textarea id="EditDesc" value={this.state.description}
            onChange={this.handleDescription} className="CreateForm">
          </textarea>

          <br/>

          <h1 id="EditAuthorName"> Author </h1>
          <input type="text" id="EditAuthor" value={this.state.author}
            onChange={this.handleAuthor} className="CreateForm">
          </input>
          <br/>

          <h1 id="AudioUrl"> AudioFile </h1>
          <input type="text" id="EditAudioURL" value={this.state.audio_url}
            onChange={this.handleAudioURL} className="CreateForm">
          </input>
          <br/>

          <h1 id="ImageUrl"> Image </h1>
          <input type="text" id="EditImageURL" value={this.state.image_url}
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
export default BookEdit;
