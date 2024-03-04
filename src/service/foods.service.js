import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchDataCall = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res;
};

export const searchDataCall = async (query) => {
  const res = await axios.get(`${BASE_URL}&query=${query}`);
  return res;
};
