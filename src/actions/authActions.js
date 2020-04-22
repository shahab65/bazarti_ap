// axios
import axios from "../middlewares/axios";

// types
import types from "../actionTypes/authTypes";

const setTokenLoading = (loading) => ({
  type: types.SET_TOKEN_LOADING,
  loading,
});

const setToken = (token) => ({
  type: types.SET_TOKEN,
  token,
});

const setTokenError = (error) => ({
  type: types.SET_TOKEN_ERROR,
  error,
});

// login using username, password; response is a set of access_token, refresh_token and their expire dates
const login = (email, password, callback) => {
  return (dispatch) => {
    // start loading
    dispatch(setTokenLoading(true));

    axios
      .post("login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(setToken(response.headers.token));
        callback && callback.onSuccess && callback.onSuccess(response);
      })
      .catch((error) => {
        dispatch(setTokenError(error));
        callback && callback.onError && callback.onError(error);
      });
  };
};

// set token in localStorage to null using redux persist
const logout = () => {
  return (dispatch) => {
    dispatch(setToken(null));
  };
};

export { login, logout };
