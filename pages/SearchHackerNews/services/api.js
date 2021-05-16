import axios from 'axios';

export const getDataSearchNews = async () => {
    const url = 'https://hn.algolia.com/api/v1/search?';
    const response = await axios.get(url);
    const results = await response.status === 200 ? await response.data : [];
    return results;
    
}