import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'http://api.weatherapi.com/v1/forecast.json?key=e0f4b8914d534f60ab5110526230506&q=',
  timeout: 5000,
  timeoutErrorMessage: 'Try after some time',
});

export default axiosInstance;
