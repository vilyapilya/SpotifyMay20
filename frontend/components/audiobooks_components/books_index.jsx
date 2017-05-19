import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksIndexContainer from './books_index_container';
// import BookShowContainer from './books_show_container';

class BooksIndex extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }
  render(){
   let books = this.props.books;
    let list = books.map((book, ind)=>(
      <li className="book-element" key={ind}>
        <NavLink to={`/audiobooks/${book.id}`}>
          { book.title }
        </NavLink>
       { book.author }
       { book.audio_url }
      </li>
    ))
    return(
      <div className="booksList">
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
export default BooksIndex;
