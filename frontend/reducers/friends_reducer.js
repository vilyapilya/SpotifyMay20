import merge from 'lodash/merge';

import { RECEIVE_FRIENDS } from '../actions/friends_actions';
import { selectAllBooks } from './selectors';

const FrinedsReducer = (state = {},  action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type){
    case RECEIVE_FRIEND:
      return nextState[action.friend.id] = action.friend
    default:
      return state;
  }
}

export default FrinedsReducer;
