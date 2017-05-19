import { connect } from 'react-redux';

import BookShow from './book_show';
import { fetchBook } from '../../actions/audiobooks_actions';

const mapStateToProps = (state) => ({
  book: state.audiobooks.book
});

const mapDispatchToProps = dispatch => ({
  fetchBook: (id) => dispatch(fetchBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
