import axios from 'axios';

const baseURL = 'your_api_endpoint';

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default apiClient;