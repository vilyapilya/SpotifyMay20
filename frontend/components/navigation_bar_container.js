import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUserId: session.currentUser.id,
  currentUserUsername: session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
