import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
const SongList = ({ songs, onSelectedSong }) => {
  const selectSongHandler = (song) => {
    onSelectedSong(song);
  };

  const songList = songs.map((song, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => selectSongHandler(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
  return <div className='ui divided list'>{songList}</div>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedSong: (song) => dispatch(action.selectSong(song)),
  };
};
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
