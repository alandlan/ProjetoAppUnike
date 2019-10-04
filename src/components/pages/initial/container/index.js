import React, { useCallback } from 'react';
import InitialPresentation from '../presentation';

const InitialContainer = props => {
  const onGoSignIn = useCallback(() => props.navigation.navigate('Auth'));
  const onGoSignUp = useCallback(() => props.navigation.navigate('SignupOne'));

  return <InitialPresentation onGoSignUp={onGoSignUp} onGoSignIn={onGoSignIn} />;
};

export default InitialContainer;
