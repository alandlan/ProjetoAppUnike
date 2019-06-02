const bto = require('Base64').btoa;

export function getBasicAuthorization() {
  window.btoa = bto;
  const auth = {
    username: 'unike-api',
    password: 'unike@ya2o08'
  };
  const credentials = btoa(`${auth.username}:${auth.password}`);
  return `Basic ${credentials}`;
}
