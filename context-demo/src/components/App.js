import React from 'react';
import UserCreate from './UserCreate';
import langContext from '../context/langContext';

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
        {/* Provider is a react component that is created for us to convey data to children */}
        {/* Provider creates a separate pipe of info each time it is created */}

        <langContext.Provider value={this.state.lang}>
          <UserCreate />
        </langContext.Provider>
      </div>
    );
  }
}

export default App;