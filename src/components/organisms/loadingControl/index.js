import React from 'react';
import { Spinner } from 'native-base';

const LoadingControl = props => {
  return props.loading ? <Spinner /> : props.children;
};

export { LoadingControl };
