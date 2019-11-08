// @flow
import { useState, useEffect, useMemo } from 'react';
import validate from './validate';
import defaultValue from './defaultValue';

import { useAsyncStorage } from '@react-native-community/async-storage';

const useFormControl = () => {
  const { getItem, setItem, removeItem } = useAsyncStorage('@signup');
  const get1 = async () => {
    const data = await getItem();
    return data;
  };
  const [state, setState] = useState(defaultValue);

  const setStorageToState = async () => {
    const item = await getItem();
    setState({
      ...state,
      ...JSON.parse(item)
    });
  };

  useEffect(() => {
    setStorageToState();
  }, []);

  const set = (type: string, value: string | Array<any>) => {
    const valid = validate(type, value);
    setState({
      ...state,
      [type]: {
        value,
        valid
      }
    });
  };
  const record = async () => {
    await setItem(JSON.stringify(state));
  };
  const clean = () => {
    removeItem();
  };
  const isValid = true;
  // useMemo(() => Object.values(state).filter(field => field.valid).length, [
  //   state
  // ]);

  return [state, set, record, clean, isValid];
};

export default useFormControl;
