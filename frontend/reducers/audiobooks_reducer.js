import merge from 'lodash/merge';

import {RECEIVE_AUDIOBOOKS} from '../actions/audiobooks_actions';
import { selectAllBooks } from './selectors';

const AudiobooksReducer = (state = {},  action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_AUDIOBOOKS:
      let nextState = merge({}, action.audiobooks, state);
      const books_array = selectAllBooks(action.audiobooks);
      books_array.forEach((book) => nextState[book.id] = book);
      return nextState;
    default:
      return state;
  }
}

export default AudiobooksReducer;
