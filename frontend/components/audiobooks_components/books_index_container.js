import { connect } from 'react-redux';

import BooksIndex from './books_index';
import { fetchBooks } from '../../actions/audiobooks_actions';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = (state) => {{
  const books = selectAllBooks(state.audiobooks);
  const user_id = state.session.currentUser.id;
  return {books, user_id};
}};

const mapDispatchToProps = dispatch => ({
  fetchBooks: (user_id) => dispatch(fetchBooks(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
