import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';

const mapStateToProps = ({ session }) => ({
  currentUserId: session.currentUser.id,
  currentUserUsername: session.currentUser.username
});

export default connect(
  mapStateToProps,
  null
)(NavigationBar);
