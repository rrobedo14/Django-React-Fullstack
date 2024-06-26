// Writing interceptor using axios//
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = '/choreo-apis/djangoreacttutorial/backend/rest-api-be2/v1.0'

const api = axios.create({
  // Loading enviorment variable
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    // Look to see if we have a local access token //
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // Passing JWT access token //
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
