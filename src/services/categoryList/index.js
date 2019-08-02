import http from '../http';

const CategoryListService = {
  getAll: () =>
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
