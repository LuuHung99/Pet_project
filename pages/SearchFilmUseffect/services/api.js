import axios from 'axios';

export const getDataMovies = async (search = '') => {
    const url = `https://www.omdbapi.com/?apikey=c24c2c7d&s=${search}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    console.log(result);
    return result;
}

export const getDataMoviesById = async(id) => {
    const url = `https://www.omdbapi.com/?apikey=c24c2c7d&i=${id}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}