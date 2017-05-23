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
    this.upload = this.upload.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        const image_url = images[0].url;
        if(error === null){
          this.setState({image_url: images[0].url});
        }
      }.bind(this));
  }

  uploadAudio(e){
    e.preventDefault();

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

          <h1 id="Desc"> description </h1>
          <textarea id="AddDesc" value={this.state.description}
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

          <button className="bookCreateButton">
            add audiobook
          </button>
          <button onClick={this.uploadAudio} className="uploadAudio">upload audio</button>
          <button onClick={this.upload} className="uploadImg">upload image</button>
          <NavLink to="/audiobooks" className="cancel"> cancel </NavLink>
    </form>
    )
  }
}
export default BookCreate;
