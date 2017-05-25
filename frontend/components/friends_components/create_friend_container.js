import { connect } from 'react-redux';

import CreateFriend from './create_friend';
import { createFriend } from '../../actions/friends_actions';


const mapStateToProps = (state, { match }) => {
  const book = state.audiobook;
  const currentUser = state.session.currentUser;
  return {book, currentUser};
};

const mapDispatchToProps = dispatch => ({
  createFriend: (friendship) => dispatch(createFriend(friendship))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFriend);
