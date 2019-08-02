import React from 'react';
import { ListItem, Left, Text, Right, Icon, Switch, Button } from 'native-base';

const CategoryListItemPresentation = props => {
  return props.data.map((item, index) => {
    return (
      <ListItem selected key={index}>
        <Left>
          <Text>{item.Nome}</Text>
        </Left>
        <Right>
          <Switch value={item.active} onValueChange={props.onChange(item)} />
        </Right>
      </ListItem>
    );
  });
};

export default CategoryListItemPresentation;
