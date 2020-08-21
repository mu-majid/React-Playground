import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions';

class GoogleAuth extends React.Component {

  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1947747136-d1fgb8sjo80u911dkog45oj69nbf2eet.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); // CB called with boolean
        })
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
      
    }
  }
  
  onSignInClick = () => {

    this.auth.signIn();
    // this.auth.signIn();

  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton () {
    if (this.props.isSignedIn === null) {
      return null; // could be spinner
    }
    else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button" >
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    }
    else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button" >
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  }

  render () {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);