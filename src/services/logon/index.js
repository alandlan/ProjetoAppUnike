import http from '../http';

const LogonService = {
  get: params =>
    new Promise((resolve, reject) => {
      http
        .get('/Profissional/Login', { params })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    })
};

export default LogonService;
