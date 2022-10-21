import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'https://reqres.in/api';

export default axiosInstance;
