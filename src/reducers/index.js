import { combineReducers } from "redux";

// reducers
import auth from "./authReducer";
import productListReducer from "./products/productListReducer";

const rootReducer = combineReducers({ auth, products: productListReducer });

export default rootReducer;
