import axios from "axios";
import nprogress from "nprogress";
import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    nprogress.start();
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default instance;
