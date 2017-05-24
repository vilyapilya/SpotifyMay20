import { connect } from 'react-redux';

import Player from './player';

const mapStateToProps = (state) => ({
  bookId: state.audiobook,
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Player);
