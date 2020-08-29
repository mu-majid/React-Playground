import React from 'react';
import LangContext from '../context/langContext';

class Button extends React.Component {

  static contextType = LangContext;

  render () {
    return (
      <button className="ui button primary" >Submit</button>
    );
  }
}

export default Button;