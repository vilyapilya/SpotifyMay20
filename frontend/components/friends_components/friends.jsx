import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import BooksIndex from '../audiobooks_components/books_index';
import { values } from 'lodash';

class Friends extends Component{
  constructor(props){
    super(props);
    this.navigateToBooks = this.navigateToBooks.bind(this);
  }
  // componentDidMount(){
  //   this.props.receiveFriend(this.props.);
  // }

  navigateToBooks(id){
    <BooksIndex user_id={id}></BooksIndex>
  }

  render(){
    if(this.props.friends){
      let friends = this.props.friends;
      friends = values({friends});
      console.log(friends);
      let frList = friends[0].map((friend, ind)=>(
        <li key={ind}>
          { friend.username }
        </li>
      ))

      return(
        <div className="friendsList">
          <ul>
            {frList}
          </ul>
        </div>
      )

    }
  }
}
export default Friends;
