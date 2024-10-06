import axios from "axios";

const axiosAuth = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const axiosForm = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  }
})

const viaCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  headers: {
    "Content-Type": "application/json"
  }
})


export { axiosAuth, viaCep, api, axiosForm};
