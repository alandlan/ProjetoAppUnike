import { useState, useEffect } from 'react';
import { useFetch } from '../../../../hooks';

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

export function useServices(initial = []) {
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
