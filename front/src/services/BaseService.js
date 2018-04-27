async function payloadRequest(method, path, body, headers) {
  const baseUrl = '/api';
  let optionBody = JSON.stringify(body);
  let optionHeader = { 'Content-Type': 'application/json' };
  if (body instanceof FormData) {
    optionBody = body;
    optionHeader = undefined;
  }
  const requestOptions = {
    method,
    headers: optionHeader,
    body: optionBody,
    credentials: 'include'
  }

  return await fetch(baseUrl + path, requestOptions);
}

export function get(path) {
  return payloadRequest('GET', path);
}

export function post(path, body, headers) {
  return payloadRequest('POST', path, body, headers);
}

export function put(path, body) {
  return payloadRequest('PUT', path, body);
}

export function del(path) {
  return payloadRequest('DELETE', path);
}
