import { connect } from 'react-redux';
import { searchBook } from '../../actions/audiobooks_actions';
import { selectAllBooks } from '../../reducers/selectors';

import BookSearch from './search';

const mapStateToProps = (state) => ({
  books: selectAllBooks(state.audiobooks)
});

const mapDispatchToProps = dispatch => ({
  searchBook: (query) => dispatch(searchBook(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);
