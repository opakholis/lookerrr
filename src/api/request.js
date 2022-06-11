import axios from 'axios';

const client = axios.create({
  baseURL: 'https://dev-example.sanbercloud.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;
