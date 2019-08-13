import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createStore } from "redux";
import Reactotron from "reactotron-react-native";
import { composeWithDevTools } from "remote-redux-devtools";

import reducer from "./reducers";
import mainSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer()
  )
);

sagaMiddleware.run(mainSaga);

export default store;
