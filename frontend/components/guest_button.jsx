import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';

class GuestButton extends Component{
  constructor(props){
    super(props);
    this.guestUser = this.guestUser.bind(this);
  }

  guestUser(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: {user: {username: "guest", password: "password"}}
    }).then((user) => (<Redirect to={`/audiobooks/${user.id}`}/>));
  };

  render(){
    return <button className="Guest" onClick={this.guestUser}>
      Demo User
    </button>;
  }
}

export default GuestButton;
