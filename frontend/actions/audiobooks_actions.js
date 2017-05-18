import * as APIUtil from '../util/audiobooks_api_util';

export const RECEIVE_AUDIOBOOKS = 'RECEIVE_AUDIOBOOKS'
export const RECEIVE_AUDIOBOOK = 'RECEIVE_AUDIOBOOK'
export const EDIT_AUDIOBOOKS = 'EDIT_AUDIOBOOK'
export const REMOVE_AUDIOBOOKS = 'REMOVE_AUDIOBOOK'

export const receiveAudioBooks = (audiobooks) => ({
  type: RECEIVE_AUDIOBOOKS,
  audiobooks
})

export const fetchBooks = () => dispatch => (
  APIUtil.fetchAudioBooks().then(books => (
    dispatch(receiveAudioBooks(books))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
