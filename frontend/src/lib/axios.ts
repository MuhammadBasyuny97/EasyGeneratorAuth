import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
