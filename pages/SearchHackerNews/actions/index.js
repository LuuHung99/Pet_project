import * as types from './types';

//Actions cua users
export const getDataNews = (name) => ({
    type: types.GET_DATA_NEWS,
    name
});

//Action cua saga
export const loadingDataNews = (loading) => ({
    type: types.LOADING_DATA_NEWS,
    loading
});

export const stopDataNews = (loading) => ({
    type: types.STOP_DATA_NEWS,
    loading,
});

export const getDataNewsSuccess = (news) => ({
    type: types.GET_DATA_NEWS_SUCCESS,
    news
});

export const getDataNewsFail = (error) => ({
    type: types.GET_DATA_NEWS_FAIL,
    error
})

export const remoteItemsNews = (remotes) => ({
    type: types.REMOTE_ITEMS_NEWS,
    remotes
})