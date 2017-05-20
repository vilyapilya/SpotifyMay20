import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksIndexContainer from './books_index_container';
import BookCreateContainer from './book_create_container';

class BooksIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
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
        <NavLink to="/frontdoor" className="Nav-bar">
          <img src="assets/book_log.jpg" className="Logo"></img>
        </NavLink>
        <div className="Play-bar">Play bar</div>
        <ul className="booksList">
          { list }
        </ul>
        <Route path="/create" componen={ BookCreateContainer }/>
        <NavLink to="/create" className="AddBook"> Add Book </NavLink>
      </div>
    );
  }
}
export default BooksIndex;
