import React from 'react';

const Context = React.createContext('du');

// separating business logic (state and action mutating it) from view using 
// a store (like redux) that is implemented with React.Context
export class LanguageStore extends React.Component {
  state = { lang: 'en' }

  onLangChange = lang => this.setState({ lang })

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLangChange: this.onLangChange }} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;