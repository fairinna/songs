import React from 'react';
import SongsList from './SongsList';
import SongDitail from './SongDitail';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongsList />
        </div>
        <div className='column eight wide'>
          <SongDitail />
        </div>
      </div>
    </div>
  );
};
export default App;
