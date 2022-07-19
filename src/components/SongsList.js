import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../action';

class SongsList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className='item'>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectedSong(song)}
            >
              select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className='ui devided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectedSong })(SongsList);
