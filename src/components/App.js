import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRacingList } from 'actions';
class App extends Component {
  componentDidMount() {
    this.props.fetchRacingList();
  }
  render() {
    console.log(this.props.pageStatus.sorted_data);
    const newArr = this.props.pageStatus.sorted_data.filter(item => {
      return item.meeting.raceType === this.props.pageStatus.filter;
    });
    console.log(newArr);
    return <div className="App">home</div>;
  }
}

function mapStateToProps(state) {
  return {
    pageStatus: state.pageStatus,
  };
}

export default connect(
  mapStateToProps,
  { fetchRacingList }
)(App);
