import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED
} from '../constants/authActionTypes';

const initialState = {
  user: {},
  userData: {},
  payload: {},
  isFetching: true,
  full: false
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, payload };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, payload};
    case AUTH_LOGIN_FAILED:
      return state;
    default:
      return state;
  }
}
