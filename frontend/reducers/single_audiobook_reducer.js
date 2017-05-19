import merge from 'lodash/merge';

import { RECEIVE_AUDIOBOOK } from '../actions/audiobooks_actions';

const SingleAudioBookReducer = (state = {},  action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_AUDIOBOOK:
      const book = action.audiobook;
      nextState = merge({}, state, book);
      return nextState;
    default:
      return state;
  }
}

export default SingleAudioBookReducer;
