import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';

class GuestButton extends Component{
  constructor(props){
    super(props);
    this.guestUser = this.guestUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`/audiobooks/${nextProps.currentUser.id}`);
    }
  }

  guestUser(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user: {username: "Guest", password: "password"}});
  };

  render(){
    return <button className="Guest" onClick={this.guestUser}>
      Demo User
    </button>;
  }
}

export default GuestButton;
