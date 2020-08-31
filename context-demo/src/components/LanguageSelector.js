import React from 'react';
import langContext from "../context/langContext";
class LanguageSelector extends React.Component {

  static contextType = langContext;
  render() {
    return (
      <div>
        Select A language :
        <i className="flag us" onClick={() => this.context.onLangChange('en')} ></i>
        <i className="flag nl" onClick={() => this.context.onLangChange('du')} ></i>
      </div>
    );
  }
}

export default LanguageSelector;