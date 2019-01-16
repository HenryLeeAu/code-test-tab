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
  let dispatch;
  const resData = [
    {
      raceStartTime: '2019-01-16T04:10:00.000Z',
    },
    {
      raceStartTime: '2019-01-16T04:07:00.000Z',
    },
  ];
  beforeEach(() => {
    dispatch = jest.fn();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('fetchRacingList with sorted order', async done => {
    moxios.stubRequest(`${baseApi}NSW`, {
      status: 200,
      response: {
        races: [...resData],
      },
    });
    const getState = () => {
      return {
        pageStatus: {
          location: 'NSW',
        },
      };
    };
    await fetchRacingList({
      location: 'NSW',
    })(dispatch, getState);
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
  });

});
