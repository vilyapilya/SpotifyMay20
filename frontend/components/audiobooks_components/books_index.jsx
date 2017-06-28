import FriendsModal from '../friends_modal';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksIndexContainer from './books_index_container';
import BookCreateContainer from './book_create_container';
import NavigationBarContainer from '../navigation_bar_container';
import Player from '../player';
import CreateFriendContainer from '../friends_components/create_friend_container';


class BooksIndex extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    const userId = this.props.userId;
    this.props.fetchBooks(userId);
  }
  componentWillReceiveProps(newProps){
    if(newProps.userId !== this.props.userId){
      newProps.fetchBooks(newProps.userId);
    }
  }

  render(){
   if (!this.props.books) {
     console.log("No books");
   }
   let addBookFriend = null;
   if(this.props.currentUserId === this.props.userId){
     addBookFriend = (<NavLink to="/create" className="AddBook"> Add Book </NavLink>);
   }else{
     addBookFriend = (<CreateFriendContainer friendId={this.props.userId}/>);
   }

   let books = this.props.books;
    let list = books.map((book, ind)=>(
      <div className="list-cont" key={ind}>
        <li className="book-element" >
          <div className="clickable-img">
            <NavLink to={`/audiobooks/${book.user_id}/${book.id}`}>
              <img src={book.image_url} className="IndImg"/>
            </NavLink>
            <NavLink to={"/audio"}>
              Link
            </NavLink>
          </div>
          <div className="clickableTitle">
            <NavLink to={`/audiobooks/${book.user_id}/${book.id}`}>
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
        <NavigationBarContainer></NavigationBarContainer>
        <ul className="booksList">
          { list }
        </ul>
        {addBookFriend}
      </div>
    );
  }
}
export default BooksIndex;
