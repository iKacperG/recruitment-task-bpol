import { combineReducers } from 'redux';
import pageReducer from './pagination/reducer';
import peopleReducer from './peopleData/reducer';

const rootReducer = combineReducers({
  pagination: pageReducer,
  peopleData: peopleReducer,
});

export default rootReducer;
