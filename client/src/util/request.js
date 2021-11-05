// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  console.log(error);
  Promise.reject(error);
});

// eslint-disable-next-line no-shadow
service.interceptors.response.use((response) => {
  if (response.headers.authentication) {
    localStorage.adminToken = response.headers.authentication;
  }
  return response.data;
}, (error) => {
  console.log(`err${error}`); // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000,
  });
  return Promise.reject(error);
});

export default service;
