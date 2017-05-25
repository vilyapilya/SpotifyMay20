import React, { Component } from 'react';
import { Route, withRouter, Redirect, NavLink } from 'react-router-dom';
import BookShowContainer from './book_show_container';
import NavigationBarContainer from '../navigation_bar_container';
import BookEditContainer from './book_edit_container';
import Player from '../player';

class BookShow extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.isFriend = this.isFriend.bind(this);
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

  addFriend(e){
    e.preventDefault();
    let user_id = this.props.currentUser.id;
    let friend_id = this.props.book.user_id;
    this.props.createFriend({user_id, friend_id});
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

  isOwnPage(){
    let dots = null;
    if (this.props.currentUser.id === this.props.book.user_id) {
       dots = (
        <div className="Dots">...
          <div className="Menue">
            <button onClick={(e) => this.handleDelete(e,this.props.book.id)}
              className="DeleteButton">
              Delete
            </button>
            <br/>
            <NavLink to={`/audiobooks/${this.props.book.uers_id}/${this.props.book.id}/edit`}
              className="EditButton" key={this.props.book.id}>Edit</NavLink>
          </div>
        </div>
      );
      return dots;
    }else {
      return null;
    }
  }

  isFriend(){
    let friends = this.props.currentUser.friend_inf;
    let array = {friends};
    let friendIds = [];
    let friendButton = null;
    array.friends.forEach((f) => {
      friendIds.push(f.friendId);
    })
    if (friendIds.includes(this.props.book.user_id)){
      friendButton = (<h1 className="addFriend">You're friends </h1>);
    }else {
      friendButton = (<button onClick={this.addFriend} className="addFriend">
                      add friend
                      </button>)
    }
    if(this.isOwnPage()){
      friendButton = null;
    }
    return friendButton;
  }

  render(){
    let dots = this.isOwnPage();
    let friendButton = this.isFriend();

    if(this.props.book){
      return (
        <div className="show-book-cont">
          <NavigationBarContainer></NavigationBarContainer>
          <Player book={this.props.book}></Player>
          <div className="TitleAuth">
            <div className="img-show-cont">
              <img src={this.props.book.image_url} className="ShowImg"/>
            </div>
            <div className="show-book-title">
              { this.props.book.title }
            </div>
            <h4 id="by">by</h4>
            <div className="show-book-auth">
              { this.props.book.author}
            </div>
          </div>
          {dots}
          <div className="show-book-desc">
            { this.props.book.description }
          </div>
          {friendButton}
        </div>
      );
    }
  }
}
export default BookShow;
