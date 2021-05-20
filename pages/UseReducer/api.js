import axios from 'axios';

export const getData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds?fbclid=IwAR3ESau3H6NDdDI9FPv5YhD3iswWRop1juik6MPG-T2UrCiOGrDyb1Gj7c0";
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}