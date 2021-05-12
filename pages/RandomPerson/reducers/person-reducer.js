import  * as types from '../actions/types';

const initialState = {
    loading: false,
    person: [],
    error: null
}

export const getDataPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_DATA_PERSON:
            return {
                ...state,
                loading: action.loading
            }
        case types.GET_DATA_PERSON_SUCCESS:
            return {
                ...state,
                loading: false,
                person: action.actor,
                error: null
            }
        case types.GET_DATA_PERSON_FAIL:
            return {
                ...state,
                loading: false,
                person: [],
                error: action.error
            }
        default:
            return state;
        
    }
}