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
    this.upload = this.upload.bind(this);

    this.slideIndex = 1;
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

  render(){
    return(
      <form className="createBook" onSubmit={this.handleEdit}>
        <h1> Temporary style !!</h1>
          <h1 id="addBookHeader"> Edit You Audiobook </h1>
          <label>
            <input type="text" id="EditTitle" value={this.state.title}
              onChange={this.handleTitle} className="CreateForm" required>
            </input>
            <div className="label-text">test</div>
          </label>
          <br/>

          <span className="DescArea">
            <h4>Description</h4>
            <textarea id="EditDesc" value={this.state.description}
              onChange={this.handleDescription} className="CreateForm">
            </textarea>
          </span>
          <br/>

          <input type="text" id="EditAuthor" value={this.state.author}
            onChange={this.handleAuthor} className="CreateForm"
            placeholder="Author">
          </input>
          <br/>

          <input type="text" id="EditAudioURL" value={this.state.audio_url}
            onChange={this.handleAudioURL} className="CreateForm"
            placeholder="AudioTemp">
          </input>
          <br/>

          <button onClick={this.upload} className="uploadEditImg">
            upload a different image</button>
          <button className="bookCreateButton">
            make changes
          </button>
          <NavLink to="/audiobooks" className="cancel"> cancel </NavLink>

    </form>
    )
  }

}
export default BookEdit;
