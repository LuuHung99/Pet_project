import axios from 'axios';

export const getDataVirutsCorona = async () => {
    const urlApi = `https://api.covid19api.com/summary`;
    const response = await axios.get(urlApi);
    const result = await response.status === 200 ? await response.data : [];
    return result;

}
