import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import BooksIndex from '../audiobooks_components/books_index';
import { values } from 'lodash';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

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
            <NavLink to={`/audiobooks/${friend.friendId}`}>
              <li>
              { friend.username }
              </li>
            </NavLink>
        </div>
      ))
      return(
        <div className="friendsList">
          <ul>
            { frList }
          </ul>
        </div>
      )

    }
  }
}
export default Friends;
