import { combineReducers } from 'redux';
import pageStatusReducer from 'reducers/pageStatus';
export default combineReducers({
  pageStatus: pageStatusReducer,
});
