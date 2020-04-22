// axios
import axios from "axios";

// actions
import { logout } from "../actions/authActions";

// redux
import store from "../helpers/store";

// history
import history from "../helpers/history";

// axios request config
// axios baseUrl has been set as a proxy to prevent cors policy
const config = { baseURL: "/api/" };

// create an instance of axios with the base url
const instance = axios.create(config);

// every time we send a request add token to the auth header
instance.interceptors.request.use((request) => {
  const token = store.getState().auth.token;
  if (token) {
    request.headers.Authorization = "Bearer " + token;
  }
  return request;
});

// check response for errors if we get 401 logout and send user to the login page we
// can check for refresh token too, but in this case we do not have any
// refresh token and we only deal with the token itself
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(logout());
      history.push("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
