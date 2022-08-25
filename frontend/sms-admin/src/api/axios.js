import axios from "axios";
const BASE_URL = "http://multitenant.test";
export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    // 'Authorization' : `Bearer ${token}`
  },
  withCredentials: true,
});
