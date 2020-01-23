import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "http://157.230.248.96:3001/api"
    : "http://157.230.248.96:3001/api"
  });

// api.interceptors.request.use(config => {
  // const token = localStorage.getItem("accessKey");
  // if (token) {
  //   config.headers = { Authorization: `${token}` };
  // }
//   return config;
// });

api.AuthorizationHeader = (token) => {
  if(token){
    api.defaults.headers["Authorization"] =  `${token}`
  }
}

api.clearToken = () => {
  delete api.defaults.headers["Authorization"]
}


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
        console.log(error.response)
        // not logged in
        // if (window.location.pathname != "/login") {
        //   window.location.replace("/login");
        // }
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

// export default api;

module.exports = api;
  