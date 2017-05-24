import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GreetingContainer from './greeting_components/greeting_container';

class FrontDoor extends React.Component{
  render(){
    return (
      <nav>
        <GreetingContainer />
        <Link to="/signup" className="frontDoorSignUp">sign up</Link>
        <div className="frontDoor"></div>
      </nav>
    );
  }
}

export default FrontDoor;
