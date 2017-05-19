import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import BookShowContainer from './book_show_container';

class BookShow extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBook(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.id !== this.props.match.params.id) {
     this.props.fetchBook(newProps.match.params.id);
    }
  }

  render(){
    console.log(this.props.book);
    // if (this.props.book){
    //
    // }
    return <h1>HH</h1>;
  }

}
export default BookShow;
