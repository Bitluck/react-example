import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_FORM_NEXT_PAGE,
  AUTH_REGISTER_FORM_PREV_PAGE,
} from '../constants/authActionTypes';

import { isAuth } from '../middleware/isAuth';

const initialState = {
  user: {},
  payload: {},
  page: 1,
  isRequesting: true,
  isSuccessRegister: false,
  loggedIn: isAuth()
}

//when app start must be loggedIn = localStorage('logged-in') || false

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, payload };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, payload, loggedIn: true };
    case AUTH_LOGIN_FAILED:
      return { ...state, payload };
    case AUTH_REGISTER_SUCCESS:
      return { ...state, isSuccessRegister: true };
    case AUTH_REGISTER_FAILED:
      return { ...state, payload, isSuccessRegister: false };
    case AUTH_LOGOUT_SUCCESS:
      return { ...state, loggedIn: false };
    case AUTH_REGISTER_FORM_NEXT_PAGE:
      const currentPage = state.page;
      return { ...state, page: currentPage + 1 };
    case AUTH_REGISTER_FORM_PREV_PAGE:
      const currentPage1 = state.page;
      return { ...state, page: currentPage1 - 1 };
    default:
      return state;
  }
}
