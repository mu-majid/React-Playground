import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../Actions';

class StreamDelete extends React.Component {

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  render () {
    const actions = (
      // because if div is used the styling will be messed up, also fragment is not rendered on html
      <React.Fragment>
        <button className="ui button negative" >Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    )
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={`Are you Sure You want delete \`${this.props.stream.title}\` stream?`}
          actions={actions}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);