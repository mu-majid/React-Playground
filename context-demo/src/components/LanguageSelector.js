import React from 'react';

class LanguageSelector extends React.Component {

  render() {
    return (
      <div>
        Select A language :
        <i className="flag us" onClick={() => this.props.onLangChange('en')} ></i>
        <i className="flag nl" onClick={() => this.props.onLangChange('du')} ></i>
      </div>
    );
  }
}

export default LanguageSelector;