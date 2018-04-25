import { get, post, put, del } from './BaseService';

export default class AuthService {
  async login(loginData) {
    const response = await post(`/auth/signin`, loginData);
    const res = await response.json();

    return { status: response.status, data: res.data, message: res.message };
  }

  async register(userData) {
    const response = await post(`/auth/signup`, userData);
    const res = await response.json();

    return { status: response.status, data: res.data, message: res.message };
  }

  async logout() {
    const response = await post(`/auth/signout`);
    const res = await response.json();

    return { status: response.status, data: res.data, message: res.message };
  }
}
