import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksIndexContainer from './books_index_container';
import BookCreateContainer from './book_create_container';
import NavigationBar from '../navigation_bar';

class BooksIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const user_id = this.props.user_id;
    this.props.fetchBooks(user_id);
  }

  render(){
   let books = this.props.books;
    let list = books.map((book, ind)=>(
      <div className="list-cont" key={ind}>
        <li className="book-element" >
          <div className="clickable-img">
            <NavLink to={`/audiobooks/${book.id}`}>
              <img src={book.image_url} className="IndImg"/>
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
        <NavigationBar></NavigationBar>
        <ul className="booksList">
          { list }
        </ul>
        <NavLink to="/create" className="AddBook"> Add Book </NavLink>
      </div>
    );
  }
}
export default BooksIndex;
