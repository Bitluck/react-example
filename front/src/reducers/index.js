import { combineReducers } from 'redux';

import userReducer from './userReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
