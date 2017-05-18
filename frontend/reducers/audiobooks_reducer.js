import merge from 'lodash/merge';

import {RECEIVE_AUDIOBOOKS} from '../actions/audiobooks_actions';

const AudiobooksReducer = (state = {},  action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_AUDIOBOOKS:
      let nextState = action.audiobooks;
      return merge({}, state, nextState);
    default:
      return state;
  }
}

export default AudiobooksReducer;
