import axios from "axios";
import nextCookie from "next-cookies";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://128.199.219.155:3001/api"
      : "http://localhost:3001/api"
});

api.interceptors.request.use(config => {
  const { token } = nextCookie(config);
  if (token) {
    config.headers = { Authorization: `${token}` };
  }
  return config;
});

module.exports = api;
