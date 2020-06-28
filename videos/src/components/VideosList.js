import React from 'react';
import VideoItem from './VideoItem';

class VideosList extends React.Component {


  render () {
    const renderedVids = this.props.videos.map((v) => {
      return <VideoItem key={v.id.videoId} video={v.snippet} />
    });

    return (
      <div className="videos-list">
        {renderedVids}
      </div>
    );
  }
}

export default VideosList;