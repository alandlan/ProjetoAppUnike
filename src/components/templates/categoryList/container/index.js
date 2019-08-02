import React, { useState, useEffect } from 'react';
import CategoryListPresentation from '../presentation';
import { Content } from 'native-base';
import { CategoryListService } from '../../../../services';
import Item from '.././../../../lib/item';

const CategoryContext = React.createContext({});
const item = new Item();

const CategoryListContainer = props => {
  const [categoryList, setCategoryList] = useState(item.get());

  async function fetchServiceList() {
    try {
      const categories = await CategoryListService.getAll();
      item.set(categories.data);
      setCategoryList(item.get());
    } catch (error) {
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
      props.onChange(item.get());
    };
  }

  return (
    <Content>
      <CategoryListPresentation data={categoryList} onChange={handleChange} />
    </Content>
  );
};

export default CategoryListContainer;
