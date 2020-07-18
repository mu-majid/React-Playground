import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
  const [selected, setSelected] = useState(null);
  const [vids, searchFor] = useVideos('buildings');
  console.log(vids);

  useEffect(() => {
    const defaultVideo = vids[0];
    if (defaultVideo) {
      setSelected(Object.assign({ videoId: defaultVideo.id.videoId }, defaultVideo.snippet));

    }
  }, [vids]);

  return (
    <div className="ui container">
      <SearchBar searchCB={searchFor} />
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