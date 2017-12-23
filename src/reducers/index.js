import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import error from './reducer_error';
const rootReducer = combineReducers({
  weather: WeatherReducer,
  error: error
});

export default rootReducer;
