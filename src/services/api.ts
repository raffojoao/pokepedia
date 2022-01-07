import axios from 'axios';

const api = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {},
});

export default api;
