import React from 'react';
import SignupProfessionalRegisterPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupProfessionalRegisterContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupProfessionalRegisterPresentation
      valid={isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('SignupOne')}
      onForward={() => forward('SignupCategoriesRegister')}
      onClear={clean}
    />
  );
};

export default SignupProfessionalRegisterContainer;
