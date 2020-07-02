import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
const KEY = 'AIzaSyAWZgrYucQxjZDaZpbkug3Wx5JQazMWH6I';

class App extends React.Component {
  state = { vids: [], selected: null };

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

  onVideoSelect = (videoSelected) => {
    console.log('Clicked ', videoSelected);
  }
  
  render () {
    return (
      <div className="ui container">
        <SearchBar searchCB={this.onSearchSumbit} />
        <VideosList videos={this.state.vids} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;