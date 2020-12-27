import { takeEvery } from "redux-saga/effects";

import logoutSaga, { checkAuthTimeOutSaga } from "./auth";

import * as actionTypes from "../actions/actionTypes";

export default function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga);
}
