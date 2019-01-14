import { GET_RACING_LIST } from 'actions/types';

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
    default:
      return state;
  }
}
