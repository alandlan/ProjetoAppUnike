import React, { useState, useEffect } from 'react';
import SignupPageTwoPresentation from '../presentation';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { initialState, initialStateValid } from './data';
import validate from '../../validate';

const SignupPageTwoContainer = props => {
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

  function handleClear() {
    removeItem();
  }

  function handleBack() {
    props.navigation.navigate('SignupOne');
  }

  async function handleForward() {
    await setItem(JSON.stringify(state));
    props.navigation.navigate('SignupThree');
  }

  return (
    <SignupPageTwoPresentation
      valid={valid}
      onChangeForm={handleChange}
      data={state}
      onBack={handleBack}
      onForward={handleForward}
      onClear={handleClear}
    />
  );
};

export default SignupPageTwoContainer;
