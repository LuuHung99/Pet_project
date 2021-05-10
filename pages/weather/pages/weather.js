import React from 'react';
import SearchWeather from '../components/search';
import ResultWeather from '../components/result';

function AppWeather(props) {
    return (
        <>
           <SearchWeather />
           <ResultWeather /> 
        </>
    );
}

export default React.memo(AppWeather);