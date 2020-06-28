import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
// const KEY = 'AIzaSyAWZgrYucQxjZDaZpbkug3Wx5JQazMWH6I';

class App extends React.Component {
  state = { vids: [] };

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

    this.setState({ vids: data.items });
  }
  
  render () {
    return (
      <div className="ui container">
        <SearchBar searchCB={this.onSearchSumbit} />
        <VideosList videos={this.state.vids} />
      </div>
    );
  }
}

export default App;