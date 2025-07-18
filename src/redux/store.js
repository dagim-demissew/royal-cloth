import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from './root-saga'
const sagaMiddleWare = createSagaMiddleware();
const middleWares = [logger, sagaMiddleWare];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middleWares);
  },
});

sagaMiddleWare.run(rootSaga)

const persistor = persistStore(store);

export { store, persistor };
