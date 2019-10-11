import React, { useState, useEffect } from 'react';
import SignupPageOnePresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupPageOneContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupPageOnePresentation
      title="Dados de Contato"
      disable={!isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('Login')}
      onForward={() => forward('SignUpTwo')}
      onClear={clean}
    />
  );
};

export default SignupPageOneContainer;
