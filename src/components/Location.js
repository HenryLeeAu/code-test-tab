import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLocation,fetchRacingList } from 'actions';
export class Location extends Component {
  componentDidMount() {}
  handleClick(location) {
    this.props.updateLocation({ location });
    this.props.fetchRacingList({ location })
  }
  render() {
    const arr = ['NSW', 'VIC'];
    return (
      <ul className="tab location">
        {arr.map(location => {
          return (
            <li key={location}>
              <button
                className={
                  this.props.pageStatus.location === location ? 'clicked' : ''
                }
                onClick={e => this.handleClick(location)}
              >
                {location}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageStatus: state.pageStatus,
  };
}

export default connect(
  mapStateToProps,
  { updateLocation,fetchRacingList }
)(Location);
