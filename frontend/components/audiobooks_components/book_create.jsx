import React, { Component } from 'react';

class BookCreate extends Component {
  constructor(props){
    super(props);
    this.state = {title: "", author: "", description: "", audio_url: "",
    image_url: "", user_id: ""};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleAudioURL = this.handleAudioURL.bind(this);
    this.handleUserId = this.handleUserId.bind(this);
    this.handleImageURL = this.handleImageURL.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    this.props.bookCreate(this.state)
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
    const audioURL = document.getElementById("AddAudioURL").value;
    this.setState({audioURL});
  }

  handleImageURL(e){
    e.preventDefault();
    const imageURL = document.getElementById("AddImageURL").value;
    this.setState({imageURL});
  }

  render(){
    return(
      <form className="createBook">
          <h1 id="addBookHeader"> Create New AudioBook </h1>

          <h1 id="AddTitle"> Title </h1>
          <input type="text" id="title" value={this.state.title}
            onChange={this.handleTitle} >
          </input>
          <br/>

          <h1 id="AddDesc"> description </h1>
          <textarea id="body" value={this.state.description}
            onChange={this.handleDescription}>
          </textarea>

          <br/>

          <h1 id="AddAuthor"> Author </h1>
          <input type="text" id="AddAuthor" value={this.state.author}
            onChange={this.handleAuthor}>
          </input>
          <br/>

          <h1 id="AudioUrl"> AudioFile </h1>
          <input type="text" id="AddAuthor" value={this.state.audio_url}
            onChange={this.handleAudioURL}>
          </input>
          <br/>

          <h1 id="AudioUrl"> Image </h1>
          <input type="text" id="AddImageURLr" value={this.state.image_url}
            onChange={this.handleImageURL}>
          </input>
          <br/>

          <button onClick={this.handleAdd} id="bookCreateButton">
            add audiobook
          </button>
    </form>
    )
  }
}
export default BookCreate;
