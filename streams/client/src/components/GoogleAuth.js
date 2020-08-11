import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1947747136-d1fgb8sjo80u911dkog45oj69nbf2eet.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }

  render () {
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth;