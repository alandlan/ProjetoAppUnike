import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LoadingPage = props => {
  useEffect(() => {
    AsyncStorage.getItem('unikeToken').then(userToken => {
      props.navigation.navigate(userToken ? 'App' : 'Auth');
    });
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export { LoadingPage };
