import http from '../http';

const CategoryListService = {
  get: () =>
    new Promise((resolve, reject) => {
      http
        .get('Categoria/ListarCategoriaComServico')
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    })
};

export { CategoryListService };
