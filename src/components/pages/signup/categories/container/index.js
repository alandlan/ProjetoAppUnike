import SignupPageThreePresentation from '../presentation';
import React from 'react';
import SignupCategoriesPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupCategoriesContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupCategoriesPresentation
      valid={isValid}
      data={form}
      onBack={() => back('SignupProfessional')}
      onChange={change}
      onForward={() => forward('SignupLocalization')}
      onClear={clean}
    />
  );
};

export default SignupCategoriesContainer;
