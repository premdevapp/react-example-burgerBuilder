import { put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

function* logout(action) {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  put({
    type: actionTypes.AUTH_LOGOUT,
  });
}
