import { get, post, put, del } from './BaseService';

export default class UserService {
  async getUser(userId) {
    const response = await get(`/users/${userId}`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getCurrentUser() {
    const response = await get(`/users/me`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }
}
