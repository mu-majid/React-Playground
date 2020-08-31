import React from 'react';
import LangContext from '../context/langContext';
import langContext from '../context/langContext';

class Button extends React.Component {

  // only used when context is needed from `this.context` (not needed with consumer)
  // static contextType = LangContext;

  // Consumer is used when multiple contexts are consumed by same component

  render() {
    return (
      <button className="ui button primary" >
        <langContext.Consumer>
          {({ lang }) => lang === 'en' ? 'Submit' : 'Voorleggen'}
        </langContext.Consumer>
      </button>
    );
  }
}

export default Button;