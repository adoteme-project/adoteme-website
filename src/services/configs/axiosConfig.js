import axios from "axios";


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
});

const viaCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  headers: {
    "Content-Type": "application/json"
  }
});


/* Instância para método de login */
const axiosAuth = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

/* Instância para quando o usuário estiver autenticado */
const axiosAuthenticated = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
})

/* Configuração para enviar token no header da instância */
axiosAuthenticated.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("token");
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => Promise.reject(error)
);

const axiosDownload = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Disposition": "attachment;filename=animais.xls",
    "Content-Type": "application/octet-stream"
  },
  responseType: 'blob',
  withCredentials: true
})

export { axiosAuth, axiosAuthenticated, viaCep, api, axiosForm, axiosDownload };
