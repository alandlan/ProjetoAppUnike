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

function useIdsActive(data = []) {
  const [ids, setIds] = useState();

  const getIds = () => {
    const idsActive = [];
    data.forEach(d => {
      d.Servicos.forEach(service => {
        service.active && idsActive.push(service.Id);
      });
    });

    return idsActive;
  };

  useEffect(() => {
    setIds(getIds());
  }, [data]);

  return ids;
}

function useServices(initial) {
  const [value, setValue] = useState(initial);
  const ids = useIdsActive(initial);

  const [{ data = [], loading }] = useFetch('categories');

  useEffect(() => {
    setValue(
      data.map(d => {
        d.Servicos = d.Servicos.map(service => {
          service.active = ids.includes(service.Id);
          return service;
        });
        return d;
      })
    );
  }, [data]);

  const active = (itm, val) => {
    setValue(
      value.map(d => {
        d.Servicos = d.Servicos.map(service => {
          if (itm.Id === service.Id) service.active = val;
          return service;
        });
        return d;
      })
    );
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
