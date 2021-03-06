import { get, post, del } from './BaseService';

export default class FriendService {
  async getFriendRelation(userId) {
    const response = await get(`/users/${userId}/friends/relation`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async makeFriends(userId) {
    const response = await post(`/users/${userId}/friends`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getFriends(userId) {
    const response = await get(`/users/${userId}/friends`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getInRequests(userId) {
    const response = await get(`/users/${userId}/friends/requests/in`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getOutRequests(userId) {
    const response = await get(`/users/${userId}/friends/requests/out`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }
}
