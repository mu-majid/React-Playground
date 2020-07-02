import React from 'react';
import VideoItem from './VideoItem';

class VideosList extends React.Component {


  render () {
    const renderedVids = this.props.videos.map((v) => {
      return <VideoItem key={v.id.videoId} video={v.snippet} onVideoSelect={this.props.onVideoSelect} />
    });

    return (
      <div className="videos-list ui relaxed divided list">
        {renderedVids}
      </div>
    );
  }
}

export default VideosList;