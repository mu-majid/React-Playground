import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

  componentDidMount () {
    this.props.fetchUser(this.props.userId);
  }

  render () {
    
    if (!this.props.user) {
      return null;
    }
    return (
      <div>
        Author: {this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(u => u.id === ownProps.userId);
  return { user };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);