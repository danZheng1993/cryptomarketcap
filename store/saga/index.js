import { all } from "redux-saga/effects";

import ListSaga from "./list";

export default function* mainSaga() {
  yield all([ListSaga()]);
}
