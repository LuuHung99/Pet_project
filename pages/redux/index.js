import React from 'react';
import ButtonComponent from './components/Button';
import Result from './components/Result';
import {Provider} from 'react-redux';
import store from './store/index';
function ReduxComponent(props) {
    return (
        <Provider store={store}>
            <Result />
            <ButtonComponent type="increment">+</ButtonComponent>
            <ButtonComponent type="decrement">-</ButtonComponent>
        </Provider>
    );
}

export default React.memo(ReduxComponent);