import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomePage = props => {
  function handleLogout() {
    AsyncStorage.clear();
    props.navigation.navigate('Auth');
  }
  return (
    <View>
      <Text>Home page here</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export { HomePage };
