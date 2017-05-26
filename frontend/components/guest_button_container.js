import { connect } from 'react-redux';

import { login, logout, signup } from '../actions/session_actions';
import GuestButton from './guest_button';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => ({
    processForm: user => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestButton);
