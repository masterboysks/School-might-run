import axios from "axios";
const BASE_URL = "http://companytwo.sms.test:81/api/";
// const BASE_URL = "http://master3.157.90.19.159/api/";
const COUNTRY_API = import.meta.env.VITE_COUNTRYAPI;
//  || window.location.origin;

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});
export const authorized = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const countryAPI = axios.create({
  baseURL: COUNTRY_API,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});
