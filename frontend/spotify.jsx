//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
import * as APIUtil from './util/friends_util';
import {createFriend, receiveFriend} from './actions/friends_actions'
import { searchBook } from './actions/audiobooks_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING
  window.recieveFriend = APIUtil.recieveFriend;
  window.createF = APIUtil.createF;
  window.createFriend = createFriend;
  window.store = store;
  window.searchAudioBooks = APIUtil.searchAudioBooks;
  window.searchBook = searchBook;
  //
  Modal.setAppElement(document.body);

  ReactDOM.render(<Root store={store} />, root);
});
