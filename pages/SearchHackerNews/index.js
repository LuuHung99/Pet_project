import React from 'react';
import AppPage from './pages/index';
import {Provider} from 'react-redux';
import configStore from './store/configStore';

const {store} = configStore({});

function AppHacker(props) {
    return (
        <Provider store={store}>
            <AppPage />
        </Provider>
    );
}

export default AppHacker;