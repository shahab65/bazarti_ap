// types
import types from "../actionTypes/authTypes";

const defaultState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_TOKEN_LOADING:
      return { ...state, loading: true };
    case types.SET_TOKEN:
      return { loading: false, token: action.token, error: null };
    case types.SET_TOKEN_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
export default authReducer;
