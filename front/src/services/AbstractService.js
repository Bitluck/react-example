export class AbstractService {
  payloadRequest(method, path, payload) {
    const baseUrl = '/api';
    const requestOptions = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    return fetch(baseUrl + path, requestOptions);
  }

  get(path) {
    return this.payloadRequest('GET', path);
  }

  post(path, payload) {
    return this.payloadRequest('POST', path, payload);
  }

  put(path, payload) {
    return this.payloadRequest('PUT', path, payload);
  }

  delete(path) {
    return this.payloadRequest('DELETE', path);
  }
}
