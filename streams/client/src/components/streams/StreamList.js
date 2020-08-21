import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreamsList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);