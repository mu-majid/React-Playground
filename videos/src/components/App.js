import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
// const KEY = 'AIzaSyAWZgrYucQxjZDaZpbkug3Wx5JQazMWH6I';

class App extends React.Component {

  onSearchSumbit = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    });

    console.log(data);
  }
  
  render () {
    return (
      <div className="ui container">
        <SearchBar searchCB={this.onSearchSumbit} />
      </div>
    );
  }
}

export default App;