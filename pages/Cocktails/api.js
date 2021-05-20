import axios from 'axios';

export const getDataCockTail = async(key) => {
    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${key}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}

export const getDataById = async(id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    
    return result;
}