import { connect } from 'react-redux';

import Player from './player';
import {selectAllBooks} from '../reducers/selectors'

const mapStateToProps = (state) => ({
  book: state.audiobook,
  books: selectAllBooks(state.audiobooks),
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Player);
