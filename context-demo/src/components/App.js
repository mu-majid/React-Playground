import React from 'react';
import UserCreate from './UserCreate';
import langContext from '../context/langContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
  state = { lang: 'en' };

  onLangChange = lang => this.setState({ lang })

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLangChange={this.onLangChange} />
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