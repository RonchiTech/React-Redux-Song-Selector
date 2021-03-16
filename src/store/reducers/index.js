import * as actionType from '../actions/actionTypes';
import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'No Diggity', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'Pump it', duration: '3:10' },
    { title: 'Look', duration: '1:15' },
  ];
};
// const initialState = {
//   selectedSong: {},
// };
const selectedSongReducer = (selectedSong = '', action) => {
  switch (action.type) {
    case actionType.SELECTED_SONG:
      return action.payload;

    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSongs: selectedSongReducer,
});
