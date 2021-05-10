import {combineReducers} from 'redux';
import {currentWeatherReducer} from './weatherReducer';

const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer
})

export default rootReducer;