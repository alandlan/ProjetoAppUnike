import axios from 'axios';
import { getBasicAuthorization } from './utils';

const http = axios.create({
  baseURL: 'https://unikebr-api.azurewebsites.net/api'
});

http.interceptors.response.use(async config => config);

http.interceptors.request.use(async config => {
  config.headers.Authorization = getBasicAuthorization();
  return config;
});

export default http;
