import { get, post, put, del } from './BaseService';

export default class PostService {
  async getPost(postId) {
    const response = await get(`/post/${postId}`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getUserAllPosts({ userId, offset, limit }) {
    const response = await get(`/users/${userId}/posts?offset=${offset}&limit=${limit}`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async getFeedPosts({ offset, limit }) {
    const response = await get(`/posts/feed?offset=${offset}&limit=${limit}`);
    const res = await response.json();

    return { status: response.status, data: res.data };
  }

  async createPost(postData) {
    const formData = new FormData();

    const text = postData.postData.text.postText;
    const picture = postData.postData.picture;

    const data = {text, picture};

    for(name in data) {
      if(data[name]) {
        formData.append(name, data[name]);
      }
    }

    const response = await post(`/posts`, formData, undefined);
    const res = await response.json();

    return { status: response.status, data: res.data, message: res.message };
  }

  async getFriendsPosts() {
    return true;
  }
}
