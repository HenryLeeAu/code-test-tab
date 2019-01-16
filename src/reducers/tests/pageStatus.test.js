import pageStatus, { defaultState } from 'reducers/pageStatus';
import {
  GET_RACING_LIST,
  UPDATE_LOCATION,
  UPDATE_RACING_TYPE,
} from 'actions/types';

describe('Reducers', () => {
  it('default', () => {
    const action = {
      type: 'abc',
    };
    const obj = pageStatus(defaultState, action);
    expect(obj).toEqual(defaultState);
  });

  it('GET_RACING_LIST', () => {
    const data = [
      {
        raceStartTime: '2019-01-16T03:29:00.000Z',
        raceNumbe: 5,
        raceName: 'HATRICK RACE 15',
        meeting: {
          raceType: 'G',
          meetingName: 'NEW ZEALAND',
          location: 'NZL',
          meetingDate: '2019-01-16',
        },
      },
      {
        raceStartTime: '2019-01-16T03:30:00.000Z',
        raceNumbe: 5,
        raceName: 'HATRICK RACE 15',
        meeting: {
          raceType: 'G',
          meetingName: 'Australia',
          location: 'NZL',
          meetingDate: '2019-01-16',
        },
      },
    ];
    const action = {
      type: GET_RACING_LIST,
      payload: data,
    };
    const obj = pageStatus(defaultState, action);
    expect(obj).toEqual({
      ...defaultState,
      sorted_data: data,
    });
  });

  it('UPDATE_LOCATION', () => {
    const data = 'VIC'
    const action = {
      type: UPDATE_LOCATION,
      payload: data,
    };
    const obj = pageStatus(defaultState, action);
    expect(obj).toEqual({
      ...defaultState,
      filter: 'R',
      location: 'VIC'
    });
  });

  it('UPDATE_RACING_TYPE', () => {
    const data = 'H'
    const action = {
      type: UPDATE_RACING_TYPE,
      payload: data,
    };
    const obj = pageStatus(defaultState, action);
    expect(obj).toEqual({
      ...defaultState,
      filter: data
    });
  });

});
