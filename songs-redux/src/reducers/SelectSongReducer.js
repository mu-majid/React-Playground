export const selectedSongReducer = (selected=null, action) => {

  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selected;
}