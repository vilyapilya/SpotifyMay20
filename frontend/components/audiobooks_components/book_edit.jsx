import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';


class BookEdit extends Component {
  constructor(props){
    super(props);
    let id = this.props.match.params.bookId;
    let title = this.props.book.title;
    let author = this.props.book.author;
    let description = this.props.book.description;
    let audioFile_url = this.props.book.audioFile_url;
    let image_url = this.props.book.image_url;
    this.user_id = parseInt(this.props.user_id);
    this.state = {
      id: id,
      title: title,
      author: author,
      description: description,
      audio: audioFile_url,
      image_url: image_url,
      user_id: this.user_id,
      spinning: false
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAudioURL = this.handleAudioURL.bind(this);
    this.upload = this.upload.bind(this);

    this.slideIndex = 1;
  }

  componentDidMount(){
    this.props.fetchBook(this.props.bookId);
  }

  handleEdit(e){
      e.preventDefault();
      this.props.editBook(this.state)
      .then((book)=>{this.props.history.push(`/audiobooks/${this.props.user_id}`)});
      console.log("edit error");
      this.setState({spinning: true});
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
    let spin;
    let overlay;
    if(this.state.spinning){
      spin = (<div className="loader">Loading...</div>);
      overlay = (<div style={formSt}></div>)
    }else{
      spin = null;
      overlay = null;
    }

    return(
      <form className="createBook" onSubmit={this.handleEdit}>
          <h1 id="addBookHeader"> Edit You Audiobook </h1>
          <label>
            <h1 id="Title"> Title </h1>
            <input type="text" id="AddTitle" value={this.state.title}
              onChange={this.handleTitle} className="CreateForm" required>
            </input>
          </label>
          <br/>
            <h1>Description</h1>
            <textarea id="AddDesc" value={this.state.description}
              onChange={this.handleDescription} className="CreateForm">
            </textarea>
          <br/>
          <h1>Author</h1>
          <input type="text" id="AddAuthor" value={this.state.author}
            onChange={this.handleAuthor} className="CreateForm">
          </input>
          <br/>

          <label htmlFor="file" className="AudioLabel"> upload audio
            <input type="file" onChange={this.updateFile}  id="file" className="AudioUpload"></input>
          </label>

          <input type="file" onChange={this.updateFile} className="AudioUpload"></input>
          <button onClick={this.upload} className="uploadImg">
            upload a different image</button>
          <button className="bookCreateButton">
            make changes
          </button>
          <NavLink to={`/audiobooks/${this.props.user_id}/${this.props.book.id}`} className="cancel"> cancel </NavLink>
          {overlay}
          {spin}
  </form>
    )
  }

}
const formSt = {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(0, 0, 0, 0.3)',
  zIndex          : 10
}
export default BookEdit;
