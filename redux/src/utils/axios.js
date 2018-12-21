import axios from 'axios';
const host = 'https://cnodejs.org/api/v1';

const reqSuccess = (config) => {
  config.url = host + config.url;
  return config;
};

const reqError = (error) =>{
  return Promise.reject(error);
};

const resSuccess = (response) => {
  return response;
};

const resError = (error) => {
  if (String(error.response.status)[0] === '5') {
    alert('服务器内部错误');
  }
  return Promise.reject(error);
};

const ajax = axios.create({
  baseURL: 'api'
});

ajax.interceptors.request.use(reqSuccess, reqError);
ajax.interceptors.response.use(resSuccess, resError);

export default ajax;

