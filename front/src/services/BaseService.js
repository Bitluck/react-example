async function payloadRequest(method, path, body) {
  const baseUrl = '/api';
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }

  return await fetch(baseUrl + path, requestOptions);
}

export function get(path) {
  return payloadRequest('GET', path);
}

export function post(path, body) {
  return this.payloadRequest('POST', path, body);
}

export function put(path, body) {
  return this.payloadRequest('PUT', path, body);
}

export function del(path) {
  return this.payloadRequest('DELETE', path);
}
