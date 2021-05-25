import axios from 'axios';

export const getDataCart = async () => {
    const url = "https://course-api.com/react-useReducer-cart-project";
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}