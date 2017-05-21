import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import Search from './search';
import { selectAllBooks } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  books: selectAllBooks(state.audiobooks)
});

export default connect(
  mapStateToProps,
  null
)(Search);
