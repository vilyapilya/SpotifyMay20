import { connect } from 'react-redux';

import Friends from './friends';

const mapStateToProps = (state) => ({
  friends: state.session.currentUser.friend_relations
});

const mapDispatchToProps = dispatch => ({
  receiveFriend: (user_id) => dispatch(receiveFriend(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
