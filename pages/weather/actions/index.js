import * as types from './type';

export const getCurrentWeather = (city) => ({
    type: types.GET_CURRENT_WEATHER,
    city
});

//3 hanh dong cua redux saga
export const startGetDataWeather = (loading) => ({
    type: types.LOADING_GET_CURRENT_WEATHER,
    loading
});

export const getCurrentWeatherSuccess = (weathers) => ({
    type: types.GET_CURRENT_WEATHER_SUCCESS,
    weathers
});

export const  getCurrentWeatherFailed = (error) => ({
    type: types.GET_CURRENT_WEATHER_FAILED,
    error
});