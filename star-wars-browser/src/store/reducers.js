import { combineReducers } from 'redux';
import pageReducer from './pagination/reducer';
import peopleDataReducer from './peopleData/reducer';

const rootReducer = combineReducers({
  pagination: pageReducer,
  peopleData: peopleDataReducer,
});

export default rootReducer;
