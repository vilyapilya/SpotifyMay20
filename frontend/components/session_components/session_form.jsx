import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("will res");
    if (nextProps.loggedIn) {
      this.props.history.push(`/audiobooks/${nextProps.currentUser.id}`);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" id="sess-mini-link">sign up instead</Link>;
    } else {
      return <Link to="/login" id="sess-mini-link">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} id="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestLogin() {
    this.setState({username: "guest", password: "password", email: "guest"});
    this.handleSubmit();
  }

  render() {
    return (
      <div className="login-form-container">
        <h2 id="header">Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input type="submit" value="submit" id="sessionSubmit"/>
            <button id="guestLogin"onClick={this.guestLogin}>continue as a guest</button>
            <Link to="/" className="SessionCancel">cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
