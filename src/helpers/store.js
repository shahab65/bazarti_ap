import { createStore, applyMiddleware, compose } from "redux";

// redux-thunk
import thunk from "redux-thunk";

// redux-persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer
import rootReducer from "../reducers/index";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, composeEnhancers(middleware));

store.subscribe(() => {
  console.log("store", store.getState());
});

export default store;
export const persistor = persistStore(store);
