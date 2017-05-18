import { combineReducers } from 'redux';

import AudiobooksReducer from './audiobooks_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  audiobooks: AudiobooksReducer
});

export default RootReducer;
