import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(p => {
      return (
        <div className="event" key={p.id}>
            <div className="label">
              <i className="large middle aligned icon user"/>
            </div>
            <div className="content">
              <div className="summary">
                <h4>{p.title}</h4>
                <div className="date">3 days ago</div>
              </div>
              <div className="extra text">
                {p.body}
              </div>
              <div className="meta">
                <a className="like">
                  <i className="like icon"></i> 5 Likes
                </a>
              </div>
            </div>
          </div>
      );
    });
  }

  render () {
    return (
          <div className="ui feed"> {this.renderList()} </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts})(PostsList);