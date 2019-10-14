import { useState, useEffect } from 'react';
import { CategoryListService } from '../../services';

const servicesAPI = {
  categories: CategoryListService
};

const useFetch = (service, args = {}, method = 'get') => {
  const [fetch, setFecth] = useState({
    loading: false,
    error: false,
    data: undefined
  });
  const [params, setParams] = useState({});

  const requestAPI = parameters => {
    const api = servicesAPI[service];

    setParams(parameters || args);
    setFecth({
      ...fetch,
      loading: true
    });
    api[method](params)
      .then(({ data }) => {
        setFecth({
          ...fetch,
          data,
          loading: false
        });
      })
      .catch(error => {
        setFecth({
          ...fetch,
          loading: false,
          error: true
        });
      });
  };

  useEffect(() => {
    requestAPI();
  }, []);

  const set = params => {
    requestAPI(params);
  };

  return [fetch, set];
};

export default useFetch;
