import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';

class BookCreate extends Component {
  constructor(props){
    super(props);
    this.user_id = parseInt(this.props.user_id);
    this.state = {title: "", author: "", description: "", audio_url: "",
    image_url: "", user_id: this.user_id, audio: ""};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.upload = this.upload.bind(this);
    this.updateFile = this.updateFile.bind(this);
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

  handleAdd(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("book[user_id]", this.state.user_id);
    formData.append("book[title]", this.state.title);
    formData.append("book[audio]", this.state.audio);
    formData.append("book[author]", this.state.author);
    formData.append("book[description]", this.state.description);
    if(this.state.image_url == ""){
      this.state.image_url = "http://res.cloudinary.com/duxhobt9p/image/upload/v1496014722/speaker-icon_sdzkdi.png"
    }
    formData.append("book[image_url]", this.state.image_url);

    this.props.bookCreate(formData)
    .then((book)=>{this.props.history.push(`/audiobooks/${this.state.user_id}`)});
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

  handleImageURL(e){
    e.preventDefault();
    const image_url = document.getElementById("AddImageURL").value;
    this.setState({image_url});
  }

  updateFile(e){
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({audio_url: fileReader.result, audio: file})
    }.bind(this);
    if (file){
      fileReader.readAsDataURL(file);
    }
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
          <label htmlFor="file" className="AudioLabel"> upload audio
            <input type="file" onChange={this.updateFile}  id="file" className="AudioUpload"></input>
           </label>
          <button className="bookCreateButton">
            add audiobook
          </button>
          <button onClick={this.upload} className="uploadImg">upload image</button>
          <NavLink to={`/audiobooks/${this.state.user_id}`} className="cancel"> cancel </NavLink>
    </form>
    )
  }
}
export default BookCreate;
