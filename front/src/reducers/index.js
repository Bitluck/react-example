import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  form: formReducer
});

export default rootReducer;
