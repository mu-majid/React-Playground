import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongsList extends React.Component {

  render () {
    console.log(" > render")
    const renderedList = this.props.songs.map(s => {
      return (
        <div key={s.title} className="item">
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(s)}
              className="ui button primary" 
            >
              Select
            </button>
          </div>
          <div className="content">
            {s.title}
          </div>
        </div>
      )
    })    
    return (
      <div className="ui divided list">
        {renderedList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongsList);