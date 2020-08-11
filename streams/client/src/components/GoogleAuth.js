import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1947747136-d1fgb8sjo80u911dkog45oj69nbf2eet.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton () {
    if (this.state.isSignedIn === null) {
      return null; // could be spinner
    }
    else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" >
          <i className="google icon">
            Sign Out
          </i>
        </button>
      );
    }
    else {
      return (
        <button className="ui red google button" >
          <i className="google icon">
            Sign In
          </i>
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

export default GoogleAuth;