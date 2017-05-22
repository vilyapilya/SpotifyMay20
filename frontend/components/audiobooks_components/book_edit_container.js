import { connect } from 'react-redux';

import BookEdit from './book_edit';
import { editBook } from '../../actions/audiobooks_actions';
import { selectBook } from '../../reducers/selectors';

const mapStateToProps = (state) =>({
  book: state.audiobook,
  user_id: state.session.currentUser.id
});
const mapDispatchToProps = dispatch => ({
  editBook: (book) => dispatch(editBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookEdit);
