import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  if (props.selected) {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Song Details: </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Title : {props.selected.title}</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  An Umm-Kalthoum Song with A duration of { props.selected.duration }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>Select A song to get its details.</div>
}

const mapStateToProps = state => {
  return { selected: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);