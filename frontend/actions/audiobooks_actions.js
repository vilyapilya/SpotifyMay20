import * as APIUtil from '../util/audiobooks_api_util.js'

export cont RECEIVE_AUDIOBOOKS = 'RECEIVE_AUDIOBOOKS'
export cont RECEIVE_AUDIOBOOK = 'RECEIVE_AUDIOBOOK'
export cont EDIT_AUDIOBOOKS = 'EDIT_AUDIOBOOK'
export cont REMOVE_AUDIOBOOKS = 'REMOVE_AUDIOBOOK'

export const receive_audiobooks = () => ({
  type: RECEIVE_AUDIOBOOKS,
  
})
