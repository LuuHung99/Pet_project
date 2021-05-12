import * as types from './types';

export const getDataPerson = () => ({
    type: types.GET_DATA_PERSON
});

export const loadingDataPerson = (loading) => ({
    type: types.LOADING_DATA_PERSON,
    loading
});

export const getDataPersonSuccess = (actor) => ({
    type: types.GET_DATA_PERSON_SUCCESS,
    actor
});

export const getDataPersonFail = (error) => ({
    type: types.GET_DATA_PERSON_FAIL,
    error
});