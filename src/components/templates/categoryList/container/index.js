import React from 'react';
import CategoryListPresentation from '../presentation';
import { Content, Text } from 'native-base';
import { LoadingControl } from '../../../organisms';
import { useServices } from './hooks';

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

export default CategoryListContainer;
