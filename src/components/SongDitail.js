import React from 'react';
import { connect } from 'react-redux';

const SongDitail = ({ song }) => {
  if (!song) {
    return <div> 'No play list yet' </div>;
  }
  return (
    <div>
      <h3>
        Details for :
        <p>
          Title:{song.title} <br />
          Duration: {song.duration}
        </p>
      </h3>
    </div>
  );
};
const songNow = (state) => {
  return { song: state.selected };
};
export default connect(songNow)(SongDitail);
