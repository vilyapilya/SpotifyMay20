import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import SearchContainer from './search_components/search_container';
import { selectAllBooks } from '../reducers/selectors'
import FriendsContainer from './friends_components/friends_container';

class NavigationBar extends Component{
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    console.log("ppp");
    this.props.logout();
  }

  render(){
    var currentUserId = this.props.currentUserId;
    console.log(currentUserId);
    return(
      <div className="Nav-bar">
        <h3 id="logoutUser" onClick={this.logout}>Logout</h3>
        <SearchContainer></SearchContainer>
        <NavLink to={`/audiobooks/${currentUserId}`} >
          <img src="http://res.cloudinary.com/duxhobt9p/image/upload/v1495643354/book_log_toni5b.jpg" className="Logo"></img>
        </NavLink>
        <NavLink to={`/audiobooks/${currentUserId}`} className="YourCollection"> Your collection </NavLink>
        <NavLink to={`/audiobooks/${currentUserId}/friends`}
          className="FriendsCollection"> Your friends'
           collection</NavLink>
         <h3 id="usersName">{this.props.currentUserUsername}</h3>




      </div>
    )
  }
}

export default NavigationBar;
