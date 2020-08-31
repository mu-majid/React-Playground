import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/langContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state = { lang: 'en' };

  onLangChange = lang => this.setState({ lang })

  render() {
    return (
      <LanguageStore >
        <div className="ui container">
          <LanguageSelector />
          {/* Provider is a react component that is created for us to convey data to children */}
          {/* Provider creates a separate pipe of info each time it is created */}

          <UserCreate />
        </div>
      </LanguageStore>
    );
  }
}

export default App;