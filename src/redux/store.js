import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middleWares);
  },
});

export default store;
