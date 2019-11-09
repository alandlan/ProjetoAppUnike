import React from 'react';
import SignupProfessionalPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupProfessionalContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupProfessionalPresentation
      valid={isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('SignupContactData')}
      onForward={() => forward('SignupCategories')}
      onClear={clean}
    />
  );
};

export default SignupProfessionalContainer;
