import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
        newState.errors = action.errors;
        return newState;
    default:
      return state;
  }
};

export default SessionReducer;
