import React from 'react';
import {Provider} from 'react-redux';
import configStore from './store/congifStore';
import ChangUser from './pages/Users';

const {store} = configStore();

function RandomPerson(props) {
    return (
        <Provider store={store}>
            <ChangUser />
        </Provider>
    );
}

export default RandomPerson;