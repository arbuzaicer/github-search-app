import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from "redux-axios-middleware";

import rootReducer from "./rootReducer";

const axiosCreate = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json",
});

const configureStore = (initialState: any) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(axiosMiddleware(axiosCreate))
  );

  return { store };
};

export default configureStore;
