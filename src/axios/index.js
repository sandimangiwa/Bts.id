import axios from "axios";

const ax = axios.create({
  // baseURL: 'http://localhost:8000/api/',
  baseURL: "http://18.139.50.74:8080/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

ax.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default ax;
