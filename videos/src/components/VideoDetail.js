import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Type What You Want to Search for.</div>;
  }

  return (
    <div>
      <div className="ui embed">
        <iframe 
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
        />

      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;