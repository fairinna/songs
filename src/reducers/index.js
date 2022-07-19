import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'American Pizza', duration: '4:05' },
    { title: 'Pizza Rish', duration: '5:05' },
    { title: ' Pizza', duration: '10:09' },
    { title: 'House Pizza', duration: '7:07' },
    { title: 'Harish Pizza', duration: '3:08' },
    { title: 'Big Pizza', duration: '12:25' },
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selected: selectedSongReducer,
});
