import * as types from "./types";

//Action cua users
export const getDataMovies = (name) => ({
  type: types.GET_DATA_MOVIES,
  name,
});

//Action cua saga

export const startDataMovies = (loading) => ({
  type: types.START_DATA_MOVIES,
  loading,
});

export const stopDataMovies = (loading) => ({
  type: types.STOP_DATA_MOVIES,
  loading,
});

export const searchMoviesSuccess = (movies) => ({
  type: types.SEARCH_DATA_MOVIES_SUCCESS,
  movies,
});

export const searchMoviesFailure = (error) => ({
  type: types.SEARCH_DATA_MOVIES_FAIL,
  error,
});
