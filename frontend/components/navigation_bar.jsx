import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SearchContainer from './search_components/search_container';
import { selectAllBooks } from '../reducers/selectors'

class NavigationBar extends Component{

  render(){
    return(
      <div className="Nav-bar">
        <SearchContainer></SearchContainer>
        <NavLink to="/" >
          <img src="assets/book_log.jpg" className="Logo"></img>
        </NavLink>
        <NavLink to="/audiobooks" className="YourCollection"> Your collcetion </NavLink>
        <NavLink to="frineds/audiobooks" className="FriendsCollection"> Your friends'
           collection</NavLink>
        <h3 id="usersName"> User's name</h3>
      </div>
    )
  }
}

export default NavigationBar;
