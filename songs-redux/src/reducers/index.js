import { combineReducers } from 'redux';
import { selectedSongReducer } from './SelectSongReducer';
import { songsReducer } from './SongsReducer';

export default combineReducers(
  {
    songs: songsReducer,
    selectedSong: selectedSongReducer
  }
);