import React from 'react';

export const selectedSong = (song) => {
  return {
    type: 'SELECTED_SONG',
    payload: song,
  };
};
