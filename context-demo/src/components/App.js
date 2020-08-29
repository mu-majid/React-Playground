import React from 'react';

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
        {this.state.lang}
      </div>
    );
  }
}

export default App;