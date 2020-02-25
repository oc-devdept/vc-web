import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://157.230.248.96:3001/api"
      : "http://localhost:3001/api"
});

// api.interceptors.request.use(config => {
// const token = localStorage.getItem("accessKey");
// if (token) {
//   config.headers = { Authorization: `${token}` };
// }
//   return config;
// });

api.AuthorizationHeader = token => {
  if (token) {
    api.defaults.headers["Authorization"] = `${token}`;
  }
};

api.clearToken = () => {
  delete api.defaults.headers["Authorization"];
};

module.exports = api;
