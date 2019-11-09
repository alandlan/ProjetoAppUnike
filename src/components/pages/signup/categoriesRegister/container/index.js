import SignupPageThreePresentation from '../presentation';
import React from 'react';
import SignupCategoriesRegisterPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupCategoriesRegisterContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupCategoriesRegisterPresentation
      valid={isValid}
      data={form}
      onBack={() => back('SignupTwo')}
      onChange={change}
      onForward={() => forward('Initial')}
      onClear={clean}
    />
  );
};

export default SignupCategoriesRegisterContainer;
