import {
  GET_RACING_LIST,
  UPDATE_LOCATION,
  UPDATE_RACING_TYPE,
} from 'actions/types';

export const defaultState = {
  sorted_data: [],
  location: 'NSW', //VIC
  filter: 'R', //G H
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_RACING_LIST:
      return {
        ...state,
        sorted_data: action.payload,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        filter: 'R',
        location: action.payload,
      };
    case UPDATE_RACING_TYPE:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
