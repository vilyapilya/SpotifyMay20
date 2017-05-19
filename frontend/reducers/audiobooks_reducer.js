import merge from 'lodash/merge';

import { RECEIVE_AUDIOBOOKS, RECEIVE_AUDIOBOOK } from '../actions/audiobooks_actions';
import { selectAllBooks } from './selectors';

const AudiobooksReducer = (state = {},  action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_AUDIOBOOKS:
      nextState = merge({}, action.audiobooks, state);
      const books_array = selectAllBooks(action.audiobooks);
      books_array.forEach((book) => nextState[book.id] = book);
      return nextState;
    case RECEIVE_AUDIOBOOK:
      nextState = action.audiobook
      return nextState;
    default:
      return state;
  }
}

export default AudiobooksReducer;
