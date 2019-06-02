import React from 'react';
import { View } from 'react-native';
import { Header as Head } from 'react-native-elements';
import style from './style';

const Header = ({ title }) => (
  <View style={style.header}>
    <Head
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  </View>
);

export { Header };
