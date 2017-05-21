import * as APIUtil from '../util/audiobooks_api_util';

export const RECEIVE_AUDIOBOOKS = 'RECEIVE_AUDIOBOOKS'
export const RECEIVE_AUDIOBOOK = 'RECEIVE_AUDIOBOOK'
export const EDIT_AUDIOBOOKS = 'EDIT_AUDIOBOOK'
export const REMOVE_AUDIOBOOKS = 'REMOVE_AUDIOBOOK'
export const ADD_AUDIOBOOK = 'ADD_AUDIOBOOK'

export const receiveAudioBooks = (audiobooks) => ({
  type: RECEIVE_AUDIOBOOKS,
  audiobooks
})

export const receiveAudioBook = (audiobook) => ({
  type: RECEIVE_AUDIOBOOK,
  audiobook
})

export const addAudioBook = (audiobook) => ({
  type: ADD_AUDIOBOOK,
  audiobook
})


export const addBook = (audiobook) => dispatch =>(
  APIUtil.createAudioBook(audiobook).then(book =>(
    dispatch(addAudioBook(book))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchBooks = (user_id) => dispatch => (
  APIUtil.fetchAudioBooks(user_id).then(books => (
    dispatch(receiveAudioBooks(books))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchBook = (id) => dispatch => (
  APIUtil.fetchAudioBook(id).then(book => (
    dispatch(receiveAudioBook(book))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
