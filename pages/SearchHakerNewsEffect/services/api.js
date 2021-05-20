import axios from 'axios';

export const getDataNew = async (keysearch = '',page) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${keysearch}&page=${page}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}