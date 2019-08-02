import validator from 'validator';

const validate = (type, value) => {
  const valid = {
    name: validator.isAlphanumeric(value),
    surname: validator.isAlphanumeric(value),
    birthday: validator.isAlphanumeric(value),
    rg: validator.isAlphanumeric(value),
    cpf: validator.isAlphanumeric(value),
    email: validator.isEmail(value),
    celular: validator.isMobilePhone(value, 'pt-BR')
  };

  return valid[type];
};

export default validate;
