import React, { useState, useEffect } from 'react';
import CategoryListPresentation from '../presentation';
import { Content, Text } from 'native-base';
import { CategoryListService } from '../../../../services';
import Item from '.././../../../lib/item';
import { LoadingControl } from '../../../organisms';
import { useFetch } from '../../../../hooks';

const CategoryContext = React.createContext({});
const item = new Item();

function dataActive(data) {
  const dt = data.map(cat => {
    let services = cat.Servicos;
    if (services[2]) services[2].active = true;
    const ids = services.map(service => {
      if (service.active) return service.Id;
    });

    return ids.join('');
  });
  return dt;
}

function activeData(data, state) {
  const stateItems = dataActive(state);
  return data.map(item => {
    return item.Servicos.map(service => {
      service.active = stateItems.includes(service.Id.toString());
      return service;
    });
  });
}

function activeItem(state, item) {
  return state.map(item => {
    console.log('item', state);
    return item;
    // return item.Servicos.map(service => {
    //   if (service.Id === item.Id) service.active === true;
    //   return service;
    // });
  });
}

function useServices(initial) {
  const [value, setValue] = useState(initial);
  const [{ data = [], loading }] = useFetch('categories');

  useEffect(() => {
    const datas = dataActive(data, value);
    setValue(datas);
  }, [data]);

  function active(item) {
    setValue(activeItem(value, item));
  }

  return [data, loading, active];
}

const CategoryListContainer = props => {
  const [data, loading, active] = useServices(props.data);

  function handleChange(item) {
    return value => {
      active(item);
      // console.log(getActive(), 'Active');
      // activeItem(item, value);
      // props.onChange(data);
    };
  }
  return (
    <Content>
      <LoadingControl loading={loading}>
        <CategoryListPresentation data={data} onChange={handleChange} />
      </LoadingControl>
    </Content>
  );
};

CategoryListContainer.defaultProps = {
  data: []
};

export default CategoryListContainer;
