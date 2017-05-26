import React, { Component } from 'react';
import { Route, withRouter, Redirect, NavLink } from 'react-router-dom';


class CreateFriend extends Component{
  constructor(props){
    super(props);
    this.addFriend = this.addFriend.bind(this);
    this.isFriend = this.isFriend.bind(this);
    this.isOwnPage = this.isOwnPage.bind(this);
  }

  addFriend(e){
    e.preventDefault();
    let user_id = this.props.currentUser.id;
    let friend_id = this.props.friendId;
    this.props.createFriend({user_id, friend_id});
  }
  isOwnPage(){
    let dots = null;
    if (this.props.currentUser.id === this.props.friendId) {
       dots = (
        <div className="Dots">...
          <div className="Menue">
            <button onClick={(e) => this.handleDelete(e,this.props.book.id)}
              className="DeleteButton">
              Delete
            </button>
            <br/>
            <NavLink to={`/audiobooks/${this.props.friendId}/${this.props.book.id}/edit`}
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
    if (friendIds.includes(this.props.friendId)){
      friendButton = (<h1 className="addFriend">You're friends</h1>);
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
    let friendButton = this.isFriend();
    return(
      <div>{friendButton}</div>
    )
  }
}

export default CreateFriend;
