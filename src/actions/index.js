import { GET_RACING_LIST } from 'actions/types';
import axios from 'axios';
import { baseApi } from 'apis';
import _ from 'lodash';

export const getRacingList = data => {
  return {
    type: GET_RACING_LIST,
    payload: data,
  };
};

export const fetchRacingList = keyword => {
  return (dispatch, getState) => {
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
