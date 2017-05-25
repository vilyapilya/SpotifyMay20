import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SearchContainer from './search_components/search_container';
import { selectAllBooks } from '../reducers/selectors'
import FriendsContainer from './friends_components/friends_container';

class NavigationBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var currentUserId = this.props.currentUserId;
    console.log(currentUserId);
    return(
      <div className="Nav-bar">
        <SearchContainer></SearchContainer>
        <NavLink to="/" >
          <img src="http://res.cloudinary.com/duxhobt9p/image/upload/v1495643354/book_log_toni5b.jpg" className="Logo"></img>
        </NavLink>
        <NavLink to={`/audiobooks/${currentUserId}`} className="YourCollection"> Your collcetion </NavLink>
        <NavLink to={`/audiobooks/${currentUserId}/friends`}
          className="FriendsCollection"> Your friends'
           collection</NavLink>
         <h3 id="usersName">{this.props.currentUserUsername}</h3>
      </div>
    )
  }
}

export default NavigationBar;
