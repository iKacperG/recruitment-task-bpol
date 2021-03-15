import { combineReducers } from 'redux';
import pageReducer from './pagination/reducer';
import peopleReducer from './people/reducer';
import filmReducer from './films/reducer';
import planetsReducer from './planets/reducer';

const rootReducer = combineReducers({
  pagination: pageReducer,
  people: peopleReducer,
  films: filmReducer,
  planets: planetsReducer,
});

export default rootReducer;
