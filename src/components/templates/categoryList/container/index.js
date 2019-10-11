import React, { useState, useEffect } from 'react';
import CategoryListPresentation from '../presentation';
import { Content } from 'native-base';
import { CategoryListService } from '../../../../services';
import Item from '.././../../../lib/item';
import { LoadingControl } from '../../../organisms';

const CategoryContext = React.createContext({});
const item = new Item();

const CategoryListContainer = props => {
  const [categoryList, setCategoryList] = useState(item.get());
  const [loading, setLoading] = useState();

  async function fetchServiceList() {
    try {
      setLoading(true);
      const categories = await CategoryListService.getAll();
      item.set(categories.data);
      setLoading(false);
      setCategoryList(item.get());
    } catch (error) {
      setLoading(false);
      setCategoryList([]);
    }
  }

  useEffect(() => {
    fetchServiceList();
  }, []);

  function handleChange(itm) {
    return value => {
      item.setActive(itm);
      setCategoryList(item.get());
      props.onChange(categoryList);
    };
  }

  return (
    <Content>
      <LoadingControl loading={loading}>
        <CategoryListPresentation data={categoryList} onChange={handleChange} />
      </LoadingControl>
    </Content>
  );
};

export default CategoryListContainer;
