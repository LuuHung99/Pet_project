import axios from 'axios';

export const getDataQuiz = async () => {
    // const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
    const url = `https://opentdb.com/api.php?amount=20`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : [];
    return result;
}