import { connect } from 'react-redux';

import BooksIndex from './books_index';
import { fetchBooks } from '../../actions/audiobooks_actions';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  books: selectAllBooks(state.audiobooks)
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
