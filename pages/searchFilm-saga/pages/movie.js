import React from 'react';
import SearchMovies from '../components/search';
import ResultMovies from '../components/result';
function Movies(props) {
    return (
        <>
            <SearchMovies />
            <ResultMovies />
        </>
    );
}

export default React.memo(Movies);