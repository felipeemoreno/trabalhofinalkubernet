import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const getCustomers = async () => {
  try {
    const response = await api.get('/customers');

    return response;
  } catch (error) {
    console.error(error);
  }
}
export { getCustomers }