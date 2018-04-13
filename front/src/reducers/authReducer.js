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
  payload: {},
  isRequesting: true
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, payload };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, payload };
    case AUTH_LOGIN_FAILED:
      return { ...state, payload };
      return state;
    default:
      return state;
  }
}
