import { useState, useEffect } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

export function useSignup(name) {
  const { getItem } = useAsyncStorage(name);
  const [state, setState] = useState();

  async function setStorageToState() {
    const item = await getItem();
    if (item) {
      setState(JSON.parse(item));
    }
  }
  useEffect(() => {
    setStorageToState();
  }, []);

  return state;
}

// export function useSignup(initialValue) {
//   const { getItem, mergeItem } = useAsyncStorage('@signup');
//   const [state, setState] = useState();

//   useEffect(async () => {
//     const item = await getItem();
//     setState(item);
//   }, [state]);

//   async function set(value) {
//     const mergeItem = await mergeItem(value);
//     setState(mergeItem);
//   }

//   return [state, set];
// }
