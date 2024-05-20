import axios from "axios";
export const api = axios.create({
  baseURL: process.env.APIURL,
});


api.interceptors.request.use(
  async (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = authToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);