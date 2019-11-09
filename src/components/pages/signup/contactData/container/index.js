import React, { useState, useEffect } from 'react';
import SignupContactDataPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupContactDataContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupContactDataPresentation
      title="Dados de Contato"
      disable={!isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('Login')}
      onForward={() => forward('SignupProfessionalRegister')}
      onClear={clean}
    />
  );
};

export default SignupContactDataContainer;
