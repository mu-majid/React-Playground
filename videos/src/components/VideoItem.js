import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
  }

  render () {
    console.log('itm : ',this.props);
    const { title, publishedAt, thumbnails } = this.props.video;
    return (
      <div ref={this.vidRef} className="video-item">
        
        <img
          alt={title}
          src={thumbnails.medium.url}
        />
        {title}

      </div>
    );
  }
}

export default VideoItem;