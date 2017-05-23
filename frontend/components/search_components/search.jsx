import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import BooksIndex from '../audiobooks_components/books_index';

class BookSearch extends Component{
  constructor(props){
    super(props);
    this.state = {title: ""};
    this.handleTitleInput = this.handleTitleInput.bind(this);
  }

  handleTitleInput(e){
    e.preventDefault();
    const title = document.getElementById("TitleSearch").value;
    if (title !== "") {
      this.props.searchBook(title).then((books) => (<BooksIndex></BooksIndex>));
    }
  }

  render(){
    return(
      <div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" id="TitleSearch" onChange={this.handleTitleInput}></input>
      </div>
    )
  }

}
export default BookSearch;
