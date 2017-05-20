import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class FrontDoor extends React.Component{
  render(){
    return (
      <nav>
        <Link to="/signup" className="frontDoorSignUp">sign up</Link>
        <div className="frontDoor"></div>
        <div className="style"></div>
      </nav>
    );
  }
}

export default FrontDoor;
