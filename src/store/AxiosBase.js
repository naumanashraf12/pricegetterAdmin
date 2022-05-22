import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  if (!token) return config;

  config.headers["token"] = token;

  return config;
});
export default axiosInstance;
