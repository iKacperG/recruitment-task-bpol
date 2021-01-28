import { combineReducers } from 'redux';
import pageReducer from './pagination/reducer';

const rootReducer = combineReducers({
  pagination: pageReducer,
});

export default rootReducer;
