import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { selectAllBooks } from '../../reducers/selectors'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { inputVal: ""};
    // this.selectTitle = this.selectTitle.bind(this);
    console.log(this.props);
    this.handleInput = this.handleInput.bind(this);
    // this.books = selectAllBooks(this.props.books);
  }

  handleInput(e){
    this.setState({inputVal: event.currentTarget.value});
  }

  matches(){
    const matches = [];
    if(this.state.inputVal.length === 0){
      return this.props.title;
    }
  }

  render(){

    // const ar = selectAllBooks(this.props.books);
    return <h1></h1>;
  }
}

export default Search;
