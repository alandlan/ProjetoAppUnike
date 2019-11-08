import React, { useState, useEffect } from 'react';
import CategoryListPresentation from '../presentation';
import { Content, Text } from 'native-base';
import { CategoryListService } from '../../../../services';
import Item from '.././../../../lib/item';
import { LoadingControl } from '../../../organisms';
import { useFetch } from '../../../../hooks';

function activeData(data, state) {
  const stateItems = dataActive(state);
  return data.map(item => {
    return item.Servicos.map(service => {
      service.active = stateItems.includes(service.Id.toString());
      return service;
    });
  });
}

function useValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  // const getIdsActive = () => {
  //   const dt = value.map(cat => {
  //     let services = cat.Servicos;
  //     const ids = services.map(service => {
  //       if (service.active) return service.Id;
  //     });

  //     return ids.join('');
  //   });
  //   return dt;
  // };

  const set = data => {
    // setValue({
    //   ...value,
    //   ...data
    // });
  };

  return [value, set];
}

function useServices(initial) {
  const [value, setValue] = useState(initial);
  const [{ data = [], loading }] = useFetch('categories');

  useEffect(() => {
    // const idsActive = [];

    // value.forEach(item => {
    //   item.Servicos.forEach(service => {
    //     idsActive.push(service.Id);
    //   });
    // });

    setValue(data);
  }, [data]);

  const active = (itm, val) => {
    const activeItems = value.map(item => {
      const services = item.Servicos.map(service => {
        // const isId = itm.Id === service.Id;
        const isId = itm.Id === service.Id;

        if (isId) service.active = isId;

        return service;
      });

      item.Servicos = services;
      return item;
    });

    setValue(activeItems);
  };

  return [value, loading, active];
}

const CategoryListContainer = props => {
  const [data, loading, active] = useServices(props.data);

  function handleChange(item) {
    return value => {
      active(item, value);
      props.onChange(data);
    };
  }
  return (
    <Content>
      <LoadingControl loading={loading}>
        <CategoryListPresentation data={props.data} onChange={handleChange} />
      </LoadingControl>
    </Content>
  );
};

CategoryListContainer.defaultProps = {
  data: []
};

export default CategoryListContainer;
