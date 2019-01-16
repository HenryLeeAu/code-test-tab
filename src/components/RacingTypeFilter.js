import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRacingType } from 'actions';
export class RaceTypeFilter extends Component {
  componentDidMount() {}
  handleClick(racingType) {
    this.props.updateRacingType({ racingType });
  }
  render() {
    const arr = [
      { filterWord: 'R', text: 'Thoroughbred' },
      { filterWord: 'G', text: 'Greyhounds' },
      { filterWord: 'H', text: 'Harness' },
    ];

    return (
      <ul className="tab type">
        {arr.map(tab => {
          const { filterWord, text } = tab;
          return (
            <li key={text}>
              <button
                onClick={e => this.handleClick(filterWord)}
                className={
                  this.props.pageStatus.filter === filterWord ? 'clicked' : ''
                }
              >
                {text}
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
  { updateRacingType }
)(RaceTypeFilter);
