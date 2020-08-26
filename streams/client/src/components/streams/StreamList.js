import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../Actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminBtns(stream) {
    if (stream.userId === this.props.currentUserId && this.props.isSignedIn) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`streams/delete/${stream.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
    else {
      return null
    }
  }

  renderStreamsList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminBtns(stream)}

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

  renderCreateButton () {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
    else {
      return null;
    }
  }

  render() {

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamsList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);