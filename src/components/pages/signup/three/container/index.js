import SignupPageThreePresentation from '../presentation';
import React from 'react';
import SignupPageTwoPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupPageThreeContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupPageThreePresentation
      valid={isValid}
      data={form}
      onBack={() => back('SignupTwo')}
      onChange={change}
      onForward={() => forward('Login')}
      onClear={clean}
    />
  );
};

export default SignupPageThreeContainer;
