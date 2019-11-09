import React from 'react';
import { Text, View, TextInput } from 'react-native';
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

const SignupProfessionalPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          <Item stackedLabel error={!props.data.name.valid}>
            <Label>Nome</Label>
            <Input value={props.data.name.value} onChangeText={props.onChangeForm('name')} />
          </Item>
          <Item stackedLabel error={!props.data.surname.valid}>
            <Label>Sobrenome</Label>
            <Input value={props.data.surname.value} onChangeText={props.onChangeForm('surname')} />
          </Item>
          <Item stackedLabel error={!props.data.birthday.valid}>
            <Label>Data de nascimento</Label>
            <Input
              value={props.data.birthday.value}
              onChangeText={props.onChangeForm('birthday')}
            />
          </Item>
          <Item stackedLabel error={!props.data.rg.valid}>
            <Label>RG</Label>
            <Input value={props.data.rg.value} onChangeText={props.onChangeForm('rg')} />
          </Item>
          <Item stackedLabel error={!props.data.cpf.valid}>
            <Label>CPF</Label>
            <Input value={props.data.cpf.value} onChangeText={props.onChangeForm('cpf')} />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupProfessionalPresentation;
