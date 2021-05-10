import * as types from './type';

export const getDataVirutsCorona = () => ({
    type: types.GET_DATA_CORONA
});

// day la cac action cua redux saga se su ly
export const startGetDataVirut = (loading) => ({
    type: types.START_GET_DATA,
    loading
});

export const getDataSuccess = (corona) => ({
    type: types.GET_DATA_CORONA_SUCCESS,
    corona
});

export const getDataFail = (error) => ({
    type: types.GET_DATA_CORONA_FAIL,
    error
})