import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

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
    const defaultVideo = data.items[0];

    this.setState({ 
      vids: data.items, 
      selected: Object.assign({videoId: defaultVideo.id.videoId}, defaultVideo.snippet) 
    });
  }

  onVideoSelect = (videoSelected) => {
    this.setState({ selected: videoSelected });
  }
  
  render () {
    return (
      <div className="ui container">
        <SearchBar searchCB={this.onSearchSumbit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideosList videos={this.state.vids} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;