import axios from 'axios';

export const getDataSearchNews = async (keysearch = '', page = 1) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${keysearch}&page=${page}`
    const response = await axios.get(url); 
    const results = await response.status === 200 ? await response.data : [];
    return results;
    
}