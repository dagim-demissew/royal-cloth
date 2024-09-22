import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middleWares);
  },
});

const persistor = persistStore(store);

export { store, persistor };
