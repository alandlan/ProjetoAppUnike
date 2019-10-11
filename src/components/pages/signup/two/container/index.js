import React from 'react';
import SignupPageTwoPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupPageTwoContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupPageTwoPresentation
      valid={isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('SignupOne')}
      onForward={() => forward('SignupThree')}
      onClear={clean}
    />
  );
};

export default SignupPageTwoContainer;
