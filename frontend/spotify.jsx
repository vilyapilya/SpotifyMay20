//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
import * as APIUtil from './util/audiobooks_api_util';
import { addAudioBook, addBook } from './actions/audiobooks_actions';

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
  window.store = store;
  window.fetchAudioBook = APIUtil.fetchAudioBook;
  window.createAudioBook = APIUtil.createAudioBook;
  window.addAudioBook = addAudioBook;
  window.addBook = addBook;
  console.log(addAudioBook({title: "Villette", author: "Bronte", user_id: 1, audio_url: "www.villette.com"}));
  console.log(store.getState());
  //
  ReactDOM.render(<Root store={store} />, root);
});
