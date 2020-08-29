import React from 'react';
import LangContext from '../context/langContext';
import langContext from '../context/langContext';

class Button extends React.Component {

  // only used when context is needed from `this.context` (not needed with consumer)
  static contextType = LangContext;

  render() {
    const text = this.context === 'en' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary" >
        <langContext.Consumer>
          {(val) => val === 'en' ? 'Submit' : 'Voorleggen'}
        </langContext.Consumer>
      </button>
    );
  }
}

export default Button;