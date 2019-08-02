import React, { useEffect, useState } from 'react';
import {
  Separator,
  List,
  ListItem,
  Left,
  Button,
  Body,
  Right,
  Switch,
  Icon,
  Text
} from 'native-base';
import CategoryListItemPresentation from './item';

const CategoryListPresentation = props => {
  return props.data.map((data, index) => {
    return (
      <List key={index}>
        <Separator bordered>
          <Text>{data.Categoria.Nome}</Text>
        </Separator>
        <CategoryListItemPresentation data={data.Servicos} onChange={props.onChange} />
      </List>
    );
  });
};

export default CategoryListPresentation;
