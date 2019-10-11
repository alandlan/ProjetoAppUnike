// @flow
import validator from 'validator';

const validate = (type: string, value: string | Array<any>) => {
  const valid = {
    name: validator.isAlphanumeric(value.toString()),
    surname: validator.isAlphanumeric(value.toString()),
    birthday: validator.isAlphanumeric(value.toString()),
    rg: validator.isAlphanumeric(value.toString()),
    cpf: validator.isAlphanumeric(value.toString()),
    email: validator.isEmail(value.toString()),
    celular: true, // validator.isMobilePhone(value.replace('-', '').replace('+', ''), 'pt-BR'),
    services: true
  };

  return valid[type];
};

export default validate;
