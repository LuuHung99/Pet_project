import axios from 'axios';

export const dataPhotos = async() => {
    const url = `https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=1`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    console.log(result);
    return result;
}

export const getDataPhotos = async (search, page) => {
    // const url = `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}&query=${search}`;
    const url = `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}&query=${search}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}