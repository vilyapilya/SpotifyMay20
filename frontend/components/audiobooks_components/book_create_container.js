import { connect } from 'react-redux';

import BookCreate from './book_create';
import { addBook} from '../../actions/audiobooks_actions';
import { selectBook } from '../../reducers/selectors';

const mapDispatchToProps = dispatch => ({
  bookCreate: (book) => dispatch(addBook(book))
});

export default connect(
  null,
  mapDispatchToProps
)(BookCreate);
