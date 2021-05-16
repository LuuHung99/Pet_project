import axios from 'axios';

export const getDataUser = async (page=100) => {
    const url = `https://api.github.com/users/john-smilga/followers?per_page=${page}`;
    const response = await axios.get(url);
    console.log(response);
    const result = await response.status === 200 ? response.data : [];
    return result;
}