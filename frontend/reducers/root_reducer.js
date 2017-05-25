import { combineReducers } from 'redux';

import AudiobooksReducer from './audiobooks_reducer';
import SessionReducer from './session_reducer';
import SingleAudioBookReducer from './single_audiobook_reducer';
import friends_reducer from './friends_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  audiobooks: AudiobooksReducer,
  audiobook: SingleAudioBookReducer
});

export default RootReducer;
