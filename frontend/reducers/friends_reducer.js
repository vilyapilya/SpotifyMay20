import merge from 'lodash/merge';

import { RECEIVE_FRIENDID } from '../actions/friends_actions';
import { selectAllBooks } from './selectors';

const FrinedsReducer = (state = {},  action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_FRIENDID:
      return nextState[action.friend];

    default:
      return state;
  }
}

export default FrinedsReducer;
