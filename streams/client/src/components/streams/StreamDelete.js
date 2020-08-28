import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../Actions';
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const {id} = this.props.match.params;
    const actions = (
      // because if div is used the styling will be messed up, also fragment is not rendered on html
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative" >Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
    return actions;
  }


  render() {

    return (
      <Modal
        title="Delete Stream"
        content={`Are you Sure You want delete \`${this.props.stream?.title || 'this'}\` stream?`}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);