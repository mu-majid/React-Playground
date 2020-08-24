import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { createStream } from '../../Actions';
class StreamCreate extends React.Component {

  onSubmit = (formValues) => { // fromValues are passed by redux-form
    this.props.createStream(formValues);
  }

  render () {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}



export default connect(null, { createStream })(StreamCreate);