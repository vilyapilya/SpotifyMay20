import * as APIUtil from '../util/session_api_util'

export const CREATE_FRIENDSHIP = 'CREATE_FRIENDSHIP';
export const DESTROY_FRIENDSHIP = 'DESTROY_FRIENDSHIP';
export const RECEIVE_FRIEND_BOOKS = 'RECEIVE_FRIEND_BOOKS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';


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

export const recieveFriend = friend =>({
  type: RECEIVE_FRIEND,
  friends
})

export const createFriend = (user_id, friend_id) => dispatch => (
  APIUtil.createF(user_id, friend_id).then(friendship => (
    dispatch(createFriendship(friendship))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const unfriend = (user_id, friend_id) => dispatch => (
  APIUtil.destroyF(user_id, friend_id).then(friendship => (
    dispatch(destroyFriendship(friendship))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const recieveFriend = (user_id) => dispatch => (
  APIUtil.receiveFriend().then(friend => (
    dispatch(recieveFriend(friend)
  ))
);
