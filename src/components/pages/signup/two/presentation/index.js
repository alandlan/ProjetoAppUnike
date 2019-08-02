import React from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TextInputMask from 'react-native-text-input-mask';

import {
  Icon,
  Spinner,
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Label,
  H1
} from 'native-base';
import { HeaderSignup } from '../../../../templates';

const SignupPageTwoPresentation = props => {
  return (
    <Container>
      <HeaderSignup
        disabled={Object.values(props.valid).includes(false)}
        onBack={props.onBack}
        onForward={props.onForward}
      />
      <StatusBar hidden />
      <Content>
        <Form>
          <Item stackedLabel error={!props.valid.name}>
            <Label>Nome</Label>
            <Input value={props.data.name} onChangeText={props.onChangeForm('name')} />
          </Item>
          <Item stackedLabel error={!props.valid.surname}>
            <Label>Sobrenome</Label>
            <Input value={props.data.surname} onChangeText={props.onChangeForm('surname')} />
          </Item>
          <Item stackedLabel error={!props.valid.birthday}>
            <Label>Data de nascimento</Label>
            <Input value={props.data.birthday} onChangeText={props.onChangeForm('birthday')} />
          </Item>
          <Item stackedLabel error={!props.valid.rg}>
            <Label>RG</Label>
            <Input value={props.data.rg} onChangeText={props.onChangeForm('rg')} />
          </Item>
          <Item stackedLabel error={!props.valid.cpf}>
            <Label>CPF</Label>
            <Input value={props.data.cpf} onChangeText={props.onChangeForm('cpf')} />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupPageTwoPresentation;
