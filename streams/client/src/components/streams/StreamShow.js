import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../Actions';
import flv from 'flv.js';

class StreamShow extends React.Component {

  constructor (props) {
    super(props);

    this.videoRef = React.createRef();
  }

  buildPlayer () {
    if (this.player || !this.props.stream) {
      return;
    }
    this.flvPlayer = flv.createPlayer(
      {
        type: 'flv',
        url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
      }
    );
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate () {
    this.buildPlayer();
  }

  componentWillUnmount () {
    this.flvPlayer.destroy();
  }

  render () {
    if (!this.props.stream) {
      return (
        <div>
          Loading Stream ...
        </div>
      );
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%"}} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);