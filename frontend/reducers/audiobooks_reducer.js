import merge from 'lodash/merge';

import {
  RECEIVE_AUDIOBOOKS,
  RECEIVE_AUDIOBOOK,
  ADD_AUDIOBOOK,
  REMOVE_AUDIOBOOK,
  EDIT_AUDIOBOOKS,
  SEARCH_AUDIOBOOKS,
  RECEIVE_ERRORS
} from '../actions/audiobooks_actions';

import { selectAllBooks } from './selectors';

const AudiobooksReducer = (state = {},  action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_AUDIOBOOKS:
      return action.audiobooks;
    case ADD_AUDIOBOOK:
      nextState = merge({}, state);
      nextState[action.audiobook.id] = action.audiobook;
      return nextState;
    case REMOVE_AUDIOBOOK:
      nextState = merge({}, state);
      delete nextState[action.audiobook.id];
      return nextState;
    case EDIT_AUDIOBOOKS:
      nextState = merge({}, state);
      nextState[action.audiobook.id] = action.audiobook;
      return nextState;
    case SEARCH_AUDIOBOOKS:
      nextState = action.audiobooks;
      const found_books = selectAllBooks(action.audiobooks);
      found_books.forEach((book) => nextState[book.id] = book);
      return nextState;
    case RECEIVE_ERRORS:
      nextState.errors = action.errors;
      return nextState;
    default:
      return state;
  }
}

export default AudiobooksReducer;
