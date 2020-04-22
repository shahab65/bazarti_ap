// types
import types from "../../actionTypes/productTypes";

const defaultState = {
  result: null,
  loading: false,
  error: null,
};

const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    // get all
    case types.SET_PRODUCTS_LOADING:
      return { ...state, loading: true };
    case types.SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        result: action.products,
        error: null,
      };
    case types.SET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default productListReducer;
