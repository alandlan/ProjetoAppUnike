import React, { useState, useEffect } from 'react';
import SignupPageOnePresentation from '../presentation';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { initialState, initialStateValid } from './data';
import validate from '../../validate';

const SignupPageOneContainer = props => {
  const { getItem, setItem, removeItem } = useAsyncStorage('@signup');
  const [state, setState] = useState(initialState);
  const [valid, setValid] = useState(initialStateValid);

  async function setStorageToState() {
    const item = await getItem();
    if (item) {
      setState(JSON.parse(item));
    }
  }

  useEffect(() => {
    setStorageToState();
  }, []);

  function handleChange(type) {
    return (value, valueNoMask) => {
      setValid({
        ...valid,
        [type]: validate(type, value) || !value.trim()
      });
      setState({
        ...state,
        [type]: valueNoMask ? valueNoMask : value
      });
    };
  }

  function handleBack() {
    props.navigation.navigate('Login');
  }
  function handleClear() {
    removeItem();
  }
  async function handleForward() {
    await setItem(JSON.stringify(state));
    props.navigation.navigate('SignupTwo');
  }

  return (
    <SignupPageOnePresentation
      valid={valid}
      onChangeForm={handleChange}
      data={state}
      onBack={handleBack}
      onForward={handleForward}
      onClear={handleClear}
    />
  );
};

export default SignupPageOneContainer;
