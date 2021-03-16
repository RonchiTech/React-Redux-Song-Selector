import React from 'react';
import { connect } from 'react-redux';
const SongDetails = ({ selectedSong }) => {
  console.log(selectedSong);
  return (
    <div>
      <h2>Song Details</h2>
      <h1>{selectedSong.title}</h1>
      <h3>{selectedSong.duration}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSongs,
  };
};
export default connect(mapStateToProps)(SongDetails);
