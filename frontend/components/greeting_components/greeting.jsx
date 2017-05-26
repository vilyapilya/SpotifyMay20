import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GuestButton from '../guest_button';

const sessionLinks = () => (

    <div className="buttons">
      <Link to="/login" className="loginLink">Login</Link>
      <br/>
      <Link to="/signup" className="signupLink">Sign up</Link>
      <GuestButton></GuestButton>
    </div>

);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <NavLink to={`/audiobooks/${currentUser.id}`} className="header-name">Hi, {currentUser.username}!
    </NavLink>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
