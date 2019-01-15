import React, { Component } from 'react';
import Location from 'components/Location';
import RacingList from 'components/RacingList';
import RacingTypeFilter from 'components/RacingTypeFilter';
class App extends Component {
  render() {
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
}

export default App;
