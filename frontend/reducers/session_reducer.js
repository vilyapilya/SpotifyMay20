import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      let nextState = merge({}, nullUser, {currentUser});
      return nextState[currentUser] = nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors: errors
      });
    case LOGOUT:
    debugger
      // const errors = action.errors;
    default:
      return state;
  }
};

export default SessionReducer;
