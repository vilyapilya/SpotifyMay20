import React, { Component } from 'react';
import { Route, withRouter, Redirect, NavLink } from 'react-router-dom';
import BookShowContainer from './book_show_container';
import NavigationBarContainer from '../navigation_bar_container';
import BookEditContainer from './book_edit_container';
import Player from '../player';
import CreateFriendContainer from '../friends_components/create_friend_container';
import AlertContainer from 'react-alert';
import Modal from 'react-modal';

class BookShow extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.isOwnPage = this.isOwnPage.bind(this);
  }

  componentDidMount(){
    this.props.fetchBook(this.props.bookId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.bookId !== this.props.match.params.bookId) {
     this.props.fetchBook(newProps.match.params.bookId);
    }
  }

  handleDelete(e, id){
    e.preventDefault();
    if(this.props.currentUser.id === this.props.book.user_id){
      this.props.deleteBook(id)
      .then((book)=>{this.props.history.push(`/audiobooks/${this.props.book.user_id}`)});
    }else {
      console.log("error");
    }
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  isOwnPage(){
    let dots = null;

    if (this.props.currentUser.id === this.props.book.user_id) {
       dots = (
        <div>
          <div className="Dots" onClick={this.openModal}>...</div>
          <Modal
            style={menue}
            contentLabel="modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
              <div>
                <button onClick={(e) => this.handleDelete(e,this.props.book.id)}
                  className="DeleteButton">
                  Delete
                </button>
                <br/>
                <NavLink to={`/audiobooks/${this.props.book.user_id}/${this.props.book.id}/edit`}
                  className="EditButton" key={this.props.book.id}>Edit</NavLink>
              </div>
          </Modal>
        </div>
      );
      return dots;
    }else {
      return null;
    }
  }

  render(){
    let dots = this.isOwnPage();
    if(this.props.book){
      return (
        <div className="show-book-cont">
          <NavigationBarContainer></NavigationBarContainer>
          <Player book={this.props.book}></Player>
          <div className="TitleAuth">
            <div className="img-show-cont">
              <img src={this.props.book.image_url} className="ShowImg"/>
            </div>
          </div>
          {dots}
          <CreateFriendContainer friendId={this.props.book.user_id}/>
            <div className="bookInfo">
              <div className="show-book-title">
                { this.props.book.title }
              </div>
              <div className="show-book-auth">
                { this.props.book.author}
              </div>
              <div className="show-book-desc">
                { this.props.book.description }
              </div>
            </div>
        </div>
      );
    }
  }
}
const menue = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.0)',
    zIndex          : 10
  },
  content : {
    border: '0',
    borderRadius: '6px',
    bottom: 'auto',
    left: '26%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '59%',
    width: '8%',
    maxWidth: '60rem',
    background: '#44444f'
  }
}
export default BookShow;
