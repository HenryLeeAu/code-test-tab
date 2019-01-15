import {
  GET_RACING_LIST,
  UPDATE_LOCATION,
  UPDATE_RACING_TYPE,
} from 'actions/types';
import axios from 'axios';
import { baseApi } from 'apis';

export const getRacingList = data => {
  return {
    type: GET_RACING_LIST,
    payload: data,
  };
};

export const updateRacingType = ({ racingType }) => {
  return {
    type: UPDATE_RACING_TYPE,
    payload: racingType,
  };
};
export const updateLocation = ({ location }) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOCATION,
      payload: location,
    });
    return dispatch(fetchRacingList());
  };
};

export const fetchRacingList = () => {
  return (dispatch, getState) => {
    console.log(`${baseApi}${getState().pageStatus.location}`);
    axios
      .get(`${baseApi}${getState().pageStatus.location}`)
      .then(res => {
        const newArr = res.data.races.sort(function(a, b) {
          return new Date(a.raceStartTime) - new Date(b.raceStartTime);
        });
        return dispatch(getRacingList(newArr));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
