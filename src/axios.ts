// backend - url

import axios from "axios";

// json placeholder - url
const url = 'https://jsonplaceholder.typicode.com';

// default headers
const headers = {
  'Content-Type': 'application/json',
}

axios.interceptors.request.use(
  config => {
    config.headers = headers;
    return config;
  }
);

export default axios.create({
  baseURL: url,
});
