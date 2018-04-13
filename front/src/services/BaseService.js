async function payloadRequest(method, path, body) {
  const baseUrl = '/api';
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return await fetch(baseUrl + path, requestOptions);
}

export function get(path) {
  return payloadRequest('GET', path);
}

export function post(path, body) {
  return payloadRequest('POST', path, body);
}

export function put(path, body) {
  return payloadRequest('PUT', path, body);
}

export function del(path) {
  return payloadRequest('DELETE', path);
}
