import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route, Redirect, Link } from 'react-router-dom';
import SearchContainer from './search_components/search_container';
import { selectAllBooks } from '../reducers/selectors'
import FriendsContainer from './friends_components/friends_container';

import Modal from 'react-modal';

class NavigationBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.logout = this.logout.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  logout(){
    this.props.logout();

  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
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

        <button onClick={this.openModal} className="FriendsCollection">Your friends</button>
          <Modal
            style={style}
            contentLabel="modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <div onClick={() => this.closeModal()}>
                <FriendsContainer />
            </div>
            <p>
              <i className="fa fa-times"
                aria-hidden="true"
                onClick={() => this.closeModal()}
              ></i>
            </p>
          </Modal>
         <h3 id="usersName">{this.props.currentUserUsername}</h3>

      </div>
    )
  }
}
const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.7)',
    zIndex          : 10
  },
  content : {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '50%',
    maxWidth: '60rem',
    background: '#44444f'
  }
}
export default NavigationBar;
