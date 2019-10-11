// @flow
import useFormControl from '../useFormControl';

const useControl = (props: any) => {
  const [form, setUseForm, record, clean, isValid] = useFormControl();

  const change = (type: string) => {
    return (value: string | Array<string>): void => {
      setUseForm(type, value);
    };
  };

  const goPage = (page: string): void => {
    props.navigation.navigate(page);
  };

  const back = (page: string): void => {
    goPage(page);
  };

  const forward = async (page: string) => {
    await record();
    goPage(page);
  };

  return { form, change, back, forward, clean, isValid };
};

export default useControl;
