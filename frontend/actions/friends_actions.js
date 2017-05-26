import * as APIUtil from '../util/friends_util';
import {receiveCurrentUser} from './session_actions';
export const CREATE_FRIENDSHIP = 'CREATE_FRIENDSHIP';
export const DESTROY_FRIENDSHIP = 'DESTROY_FRIENDSHIP';
export const RECEIVE_FRIEND_BOOKS = 'RECEIVE_FRIEND_BOOKS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIENDID = 'RECEIVE_FRIEND';


export const createFriendship = friendship => ({
  type: CREATE_FRIENDSHIP,
  friendship
});

export const destroyFriendship = friendship => ({
  type: DESTROY_FRIENDSHIP,
  friendship
});

export const receiveFriend_books = books => ({
  type: RECEIVE_FRIEND_BOOKS,
  books
})

export const recieveFriendId = friend =>({
  type: RECEIVE_FRIENDID,
  friend
})
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})
export const receiveFriendErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const createFriend = (friendship) => dispatch => (
  APIUtil.createF(friendship).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveFriendErrors(err.responseJSON))
  ))
);

export const unfriend = (user_id, friend_id) => dispatch => (
  APIUtil.destroyF(user_id, friend_id).then(friendship => (
    dispatch(destroyFriendship(friendship))
  ), err => (
    dispatch(receiveFriendErrors(err.responseJSON))
  ))
);
