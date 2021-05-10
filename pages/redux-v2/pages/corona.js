import React, {useEffect} from 'react';
import Welcome from '../components/welcome';
import Result from '../components/result';
import {getDataVirutsCorona} from '../actions/index';
import {useDispatch} from 'react-redux';

function Corona(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = () => {
            dispatch(getDataVirutsCorona()); //Goi action vao store
        }
        getData();
    }, [])
    return (
        <>
            <Welcome />
            <Result />
        </>
    );
}

export default React.memo(Corona);
