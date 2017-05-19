import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import BookShowContainer from './book_show_container';

class BookShow extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

    this.props.fetchBook(this.props.bookId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.bookId !== this.props.match.params.bookId) {
     this.props.fetchBook(newProps.match.params.bookId);
    }
  }

  render(){
    if(this.props.book){
      console.log(this.props);
      console.log(this.props.book.title);
      return (
        <div className="show-book-cont">
          <div className="img-show-cont">
            { this.props.book.image_url }
          </div>

          <div className="show-book-title">
            { this.props.book.title }
          </div>

          <div className="show-book-auth">
            { this.props.book.author}
          </div>

          <div className="show-book-desc">
            { this.props.book.description }
          </div>

          <div className="show-book-audio">
            { this.props.book.audio_url }
          </div>
        </div>
      );
    }
  }
}
export default BookShow;
