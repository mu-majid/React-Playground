import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAWZgrYucQxjZDaZpbkug3Wx5JQazMWH6I';

const App = () => {
  const [vids, setVids] = useState([]);
  const [selected, setSelected] = useState(null);

  // run only one time when the component first renders
  useEffect(() => {
    onSearchSumbit('buildings');
  }, []);

  const onSearchSumbit = async (term) => {
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

    setVids(data.items);
    setSelected(Object.assign({videoId: defaultVideo.id.videoId}, defaultVideo.snippet));
  }


  return (
    <div className="ui container">
      <SearchBar searchCB={onSearchSumbit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selected} />
          </div>
          <div className="five wide column">
            <VideosList videos={vids} onVideoSelect={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );

}


export default App;