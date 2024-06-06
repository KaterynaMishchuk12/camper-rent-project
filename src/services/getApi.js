import axios from 'axios';

axios.defaults.baseURL = 'https://666179df63e6a0189fea1000.mockapi.io';

const getAdverts = async () => {
  try {
    const response = await axios.get('/adverts');

    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
export default getAdverts;
