import { connect } from 'react-redux';

import BooksIndex from './books_index';
import { fetchBooks } from '../../actions/audiobooks_actions';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {{
  const books = selectAllBooks(state.audiobooks);
  const currentUserId = state.session.currentUser.id;
  const userId = parseInt(match.params.userId);
  return {books, userId, currentUserId};
}};

const mapDispatchToProps = dispatch => ({
  fetchBooks: (userId) => dispatch(fetchBooks(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
