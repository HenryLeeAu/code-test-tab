import React from 'react';
import Location from 'components/Location';
import RacingList from 'components/RacingList';
import RacingTypeFilter from 'components/RacingTypeFilter';

const App =  props =>{
  return (
    <div className="App">
      <nav className="nav">
        <div className="content">
          <Location />
        </div>
      </nav>
      <div className="main content ">
        <h1>Next To Go</h1>
        <div>
          <RacingTypeFilter />
        </div>
        <RacingList />
      </div>
    </div>
  );
}
export default App;
