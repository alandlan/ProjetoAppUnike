// @flow

type Value<T> = {
  value: T,
  valid: boolean
};

export type Initial = {
  email: Value<string>,
  celular: Value<string>
};
