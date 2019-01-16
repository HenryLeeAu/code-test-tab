import React, { Component } from 'react';
import RacingListItem from 'components/RacingListItem';
import { connect } from 'react-redux';
import { fetchRacingList } from 'actions';
export class RacingList extends Component {
  state = {
    currentTime: new Date().getTime(),
  };
 
  componentDidMount() {
    this.props.fetchRacingList({location:'NSW'});
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime(),
      });
    }, 60000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    
  }
  render() {
    const filteredList = this.props.pageStatus.sorted_data.filter(item => {
      return item.meeting.raceType === this.props.pageStatus.filter;
    });
    if (filteredList.length) {
      return (
        <ul className="list">
          {filteredList.map((raceItem, index) => {
            return (
              <RacingListItem
                raceItem={raceItem}
                key={index + raceItem.raceName}
                currentTime={this.state.currentTime}
              />
            );
          })}
        </ul>
      );
    } else {
      return <div id="noresult">Noresult</div>;
    }
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
)(RacingList);
