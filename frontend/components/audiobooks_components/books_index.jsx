import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksIndexContainer from './books_index_container';
// import BookShowContainer from './books_show_container';

class BooksIndex extends Component {
  constructor(props){
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  handleAdd(e){
    e.preventDefault();
  }

  handleTitle(e){
    e.preventDefault();
    const title = document.getElementById("EditTitle").value;
    this.setState({title});
  }

  render(){
   let books = this.props.books;
    let list = books.map((book, ind)=>(
      <div className="list-cont" key={ind}>

        <li className="book-element" >
          <div className="clickable-img">
            <NavLink to={`/audiobooks/${book.id}`}>
              { book.image_url }
            </NavLink>
          </div>
          <div className="clickableTitle">
            <NavLink to={`/audiobooks/${book.id}`}>
              { book.title }
            </NavLink>
          </div>

          <div className="inf">
            { book.author }
          </div>
          <div className="inf">
            { book.audio_url }
          </div>
        </li>

      </div>
    ))
    return(
      <div id="out">
        <div className="page-bg"></div>
        <ul className="booksList">
          { list }
        </ul>
      </div>
    );
  }
}
export default BooksIndex;
