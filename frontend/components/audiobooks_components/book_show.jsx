import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import BookShowContainer from './book_show_container';
import NavigationBar from '../navigation_bar';

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
      return (
        <div className="show-book-cont">
          <NavigationBar></NavigationBar>
          <div className="TitleAuth">
            <div className="img-show-cont">
              { this.props.book.image_url }
            </div>
            <div className="show-book-title">
              { this.props.book.title }
            </div>
            <div className="show-book-auth">
              <h4 id="by">by</h4>
              { this.props.book.author}
            </div>
          </div>

          <div className="show-book-desc">
            { this.props.book.description }
          </div>

          <div className="show-book-audio">
            { this.props.book.audio_url }
          </div>

          <div className="PlayButton">
            Play
          </div>
        </div>
      );
    }
  }
}
export default BookShow;
