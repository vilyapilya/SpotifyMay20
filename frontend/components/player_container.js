import { connect } from 'react-redux';

import Player from './player';
import {selectAllBooks} from '../reducers/selectors';
import { fetchBooks } from '../actions/audiobooks_actions';

const mapStateToProps = (state) => ({
  book: state.audiobook,
  books: selectAllBooks(state.audiobooks),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: (userId) => dispatch(fetchBooks(userId))
});

export default connect(
  mapStateToProps
)(Player);
