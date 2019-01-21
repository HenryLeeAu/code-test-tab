import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { baseApi } from 'apis';
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



describe('Action ', () => {
  it('fetchRacingList with sorted order', async done => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({ sorted_data: [] });

    const expectedActions = [
      {
        type: GET_RACING_LIST,
        payload: [
          { raceStartTime: '2019-01-16T04:07:00.000Z' },
          { raceStartTime: '2019-01-16T04:10:00.000Z' },
        ],
      },
    ];
    moxios.install();
    moxios.stubRequest(`${baseApi}NSW`, {
      status: 200,
      response: {
        races: [{
          raceStartTime: '2019-01-16T04:10:00.000Z',
        },
        {
          raceStartTime: '2019-01-16T04:07:00.000Z',
        }],
      },
    });

    await store.dispatch(fetchRacingList({ location: 'NSW' }));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
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
