import React, { useState, useEffect } from 'react';
import SignupLocalizationPresentation from '../presentation';
import { useControl } from '../../../../../hooks';

const SignupContactDataContainer = props => {
  const { form, change, back, forward, clean, isValid } = useControl(props);

  return (
    <SignupLocalizationPresentation
      title="Sua localização"
      disable={!isValid}
      onChangeForm={change}
      data={form}
      onBack={() => back('Login')}
      onForward={() => forward('SignupProfessional')}
      onClear={clean}
    />
  );
};

export default SignupContactDataContainer;
