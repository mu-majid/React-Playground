import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { lang: 'en' };

  onLangChange = lang => this.setState({ lang })

  render() {
    return (
      <div className="ui container">
        <div>
          Select A language : 
          <i className="flag us" onClick={() => this.onLangChange('en')} ></i>
          <i className="flag nl" onClick={() => this.onLangChange('du')} ></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;