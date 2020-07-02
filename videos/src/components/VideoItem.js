import React from 'react';
import './VideoItem.css';
class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
  }


  render () {
    const { title, publishedAt, thumbnails } = this.props.video;
    return (
      <div ref={this.vidRef} className="video-item item" onClick={() => this.props.onVideoSelect(this.props.video)}>
        
        <img
          alt={title}
          src={thumbnails.medium.url}
          className="ui image"
        />
        <div className="content">
          <div className="header">
            {title}
          </div>
        </div>

      </div>
    );
  }
}

export default VideoItem;