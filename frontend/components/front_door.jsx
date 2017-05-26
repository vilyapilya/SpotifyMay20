import React from 'react';
import SessionForm from './session_components/session_form';
import { Link, NavLink , Redirect } from 'react-router-dom';
import GreetingContainer from './greeting_components/greeting_container';

class FrontDoor extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav>
        <GreetingContainer />
        <span className="SpeakingBook">
          <h1>speakingBook</h1>
          <br/>
          <h1>share your audiobooks with your friends!</h1>
        </span>
        <div className="frontDoor"></div>
      </nav>
    );
  }
}

export default FrontDoor;
