import {
  getRacingList,
  updateRacingType,
  updateLocation,
  fetchRacingList,
} from 'actions';
import {
  GET_RACING_LIST,
  UPDATE_LOCATION,
  UPDATE_RACING_TYPE,
} from 'actions/types';
import moxios from 'moxios';
import { baseApi } from 'apis';

describe('Action ', () => {
  it('fetchRacingList with sorted order', async done => {
    const dispatch = jest.fn();
    const resData = [
      {
        raceStartTime: '2019-01-16T04:10:00.000Z',
      },
      {
        raceStartTime: '2019-01-16T04:07:00.000Z',
      },
    ];
    moxios.install();
    moxios.stubRequest(`${baseApi}NSW`, {
      status: 200,
      response: {
        races: [...resData],
      },
    });
    await fetchRacingList({
      location: 'NSW',
    })(dispatch);
    moxios.wait(() => {
      const sortedArr = [
        {
          raceStartTime: '2019-01-16T04:07:00.000Z',
        },
        {
          raceStartTime: '2019-01-16T04:10:00.000Z',
        },
      ];
      expect(dispatch).toBeCalledWith(getRacingList(sortedArr));
      done();
    });
    moxios.uninstall();
  });

  it('updateRacingType', () => {
    const racingType = 'g';
    const result = updateRacingType({ racingType });
    expect(result).toEqual({ type: UPDATE_RACING_TYPE, payload: racingType });
  });

  it('updateLocation', () => {
    const location = 'NSW';
    const result = updateLocation({ location });
    expect(result).toEqual({ type: UPDATE_LOCATION, payload: location });
  });

  it('getRacingList', () => {
    const data = [
      {
        raceName: 'abc',
      },
      {
        raceName: 'cde',
      },
    ];
    const result = getRacingList(data);
    expect(result).toEqual({ type: GET_RACING_LIST, payload: data });
  });
});
