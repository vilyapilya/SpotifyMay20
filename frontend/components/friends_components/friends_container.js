import { connect } from 'react-redux';

import Friends from './friends';

const mapStateToProps = (state) => ({
  friends: state.session.currentUser.friend_inf,
  currentUserId: state.session.currentUser.id
});

// const mapDispatchToProps = dispatch => ({
//   receiveFriend: (user_id) => dispatch(receiveFriend(user_id))
// });

export default connect(
  mapStateToProps,
  null
)(Friends);
