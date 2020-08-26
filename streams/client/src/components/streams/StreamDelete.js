import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
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
        content="Are you Sure You want delete this stream?"
        actions={actions}
      />
    </div>
  )
}

export default StreamDelete;