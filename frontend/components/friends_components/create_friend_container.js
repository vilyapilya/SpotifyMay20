import { connect } from 'react-redux';

import CreateFriend from './create_friend';
import { createFriend } from '../../actions/friends_actions';


const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const book = state.audiobook;
  return {book, currentUser};
};

const mapDispatchToProps = dispatch => ({
  createFriend: (friendship) => dispatch(createFriend(friendship))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFriend);
