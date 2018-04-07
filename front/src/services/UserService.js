import { AbstractService } from './AbstractService';

export class UserService extends AbstractService {
  async getUser(userId) {
    const response = await this.get(`/users/${userId}`);
    const data = await response.json();

    console.log({ response });
    return { status: response.ok, data };
  }
}
