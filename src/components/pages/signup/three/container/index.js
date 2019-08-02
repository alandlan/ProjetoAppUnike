import React, { useState, useEffect } from 'react';
import SignupPageThreePresentation from '../presentation';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { initialState } from './data';

const SignupPageThree = props => {
  const { getItem, setItem, removeItem } = useAsyncStorage('@signup');
  const [state, setState] = useState([]);

  async function setStorageToState() {
    const item = await getItem();
    if (item) {
      setState(JSON.parse(item));
    }
  }
  useEffect(() => {
    setStorageToState();
  }, []);

  function handleChange(value) {
    setState({
      ...state,
      value
    });
  }
  async function handleForward() {
    await setItem(JSON.stringify(state));
    props.navigation.navigate('SignupOne');
  }

  function handleBack() {
    props.navigation.navigate('SignupTwo');
  }

  return (
    <SignupPageThreePresentation
      onBack={handleBack}
      onChange={handleChange}
      onForward={handleForward}
    />
  );
};

export { SignupPageThree };
