// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create();

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // console.log(error);
  Promise.reject(error);
});

// eslint-disable-next-line no-shadow
service.interceptors.response.use((resp) => {
  if (resp.headers.authentication) {
    localStorage.setItem('adminToken', resp.headers.authentication);
  }
  return resp.data;
}, (error) => {
  if (error.response.code === 403) {
    localStorage.removeItem('adminToken');
  } else {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
  }
  return Promise.reject(error);
});

export default service;
