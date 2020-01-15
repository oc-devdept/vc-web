import axios from "axios";

const api = axios.create({
  baseURL: "http://159.65.14.175:3001/api"
    // process.env.NODE_ENV === "production"
    //   ? "http://localhost:3001/api"
    //   : "http://localhost:3001/api"
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("accessKey");
  if (token) {
    config.headers = { Authorization: `${token}` };
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.message === "Network Error") {
      // The user doesn't have internet
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 400:
        break;
      case 401:
        // not logged in
        if (window.location.pathname != "/login") {
          window.location.replace("/login");
        }
        break;
      case 403:
        // no access rights
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        // Unknown Error
        break;
    }
    return Promise.reject(error);
  }
);

export default api;
