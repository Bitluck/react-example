import { userActionTypes } from '../constants/userActionTypes';
import { UserService } from '../services/UserService';

export class UserActions {
  constructor() {
    this.userService = new UserService();
  }
  
  getUser(userId) {
    return async dispatch => {
      const response = await this.userService.getUser(userId);
      console.log({ response1: response });
      
      dispatch({
        type: userActionTypes.GET_USER,
        payload: response.date
      });
    }
  }
}
