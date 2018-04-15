import { combineReducers } from 'redux';

import userReducer from './userReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  form: formReducer
});

export default rootReducer;
