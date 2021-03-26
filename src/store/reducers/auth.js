import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  idToken: null,
  localId: null,
  loading: false,
  error: null,
};

const initAuth = state => {
  return updateObject(state, {
    loading: true,
  });
};

const authSucceeded = (state, action) => {
  return updateObject(state, {
    idToken: action.idToken,
    localId: action.localId,
    loading: false,
    error: null,
  });
};

const authFailed = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = state => {
  return updateObject(state, {
    idToken: null,
    localId: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_AUTH:
      return initAuth(state);
    case actionTypes.AUTH_SUCCEEDED:
      return authSucceeded(state, action);
    case actionTypes.AUTH_FAILED:
      return authFailed(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
