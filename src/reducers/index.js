import { combineReducers } from 'redux';
import ClockStores from './reducer-clock';
import WeatherStores from './reducer-weather';

const rootReducer = combineReducers({
  ClockStores,
  WeatherStores,
});

export default rootReducer;
