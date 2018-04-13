import { get, post, put, del } from './BaseService';

export default class AuthService {
  async login(loginData) {
    const response = await post(`/auth/signin`, loginData);
    const res = await response.json();

    return { status: response.status, data: res.data, message: res.message };
  }
}
