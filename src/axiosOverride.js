import axios from 'axios';

const devOverride = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
  headers: {
    common: {
      Authorization: 'devOverride Auth Token'
    }
  }
})

devOverride.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

devOverride.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default devOverride;
