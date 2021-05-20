import axios from 'axios';

export const getDataPerson = async () => {
    const url = `https://randomuser.me/api`;
    const response = await axios.get(url);
    const  result = await response.status === 200 ? await response.data : [];
    return result;
}
