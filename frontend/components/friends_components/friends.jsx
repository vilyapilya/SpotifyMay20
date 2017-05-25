import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import BooksIndex from '../audiobooks_components/books_index';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';

class Friends extends Component{
  constructor(props){
    super(props);
    this.navigateToBooks = this.navigateToBooks.bind(this);
  }
  // componentDidMount(){
  //   this.props.receiveFriend(this.props.);
  // }

  navigateToBooks(id){
    <BooksIndex userId={id}></BooksIndex>
  }

  render(){
    if(this.props.friends){
      let friends = this.props.friends;
      let frList = friends.map((friend, ind)=>(
        <div className="friend" key={ind}>
          <li>
            <NavLink to={`/audiobooks/${friend.friendId}`}>
              { friend.username }
            </NavLink>
          </li>
        </div>
      ))
      return(
        <div className="friendsList">
          <ul>
            { frList }
          </ul>
          <NavLink to={`/audiobooks/${this.props.currentUserId}`} className="goback">go back</NavLink>
        </div>
      )

    }
  }
}
export default Friends;
