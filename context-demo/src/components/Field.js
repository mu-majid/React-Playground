import React from 'react';
import LangContext  from '../context/langContext';
class Field extends React.Component {

  static contextType = LangContext;

  render () {
    const text = this.context === 'en' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;