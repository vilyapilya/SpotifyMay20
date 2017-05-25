import { connect } from 'react-redux';

import BookShow from './book_show';
import { fetchBook, deleteBook, editBook } from '../../actions/audiobooks_actions';
import { selectBook } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const bookId = parseInt(match.params.bookId);
  const book = state.audiobook;
  const currentUser = state.session.currentUser;
  return {bookId, book, currentUser};
};

const mapDispatchToProps = dispatch => ({
  fetchBook: (id) => dispatch(fetchBook(id)),
  deleteBook: (id) => dispatch(deleteBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
