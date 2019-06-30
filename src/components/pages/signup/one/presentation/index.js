import React from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import style from './style';

import {
  Icon,
  Spinner,
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  H1
} from 'native-base';

const SignupPageOnePresentation = props => {
  state = {
    date: ''
  };

  return (
    <Container style={style.container} disabled={true}>
      <StatusBar hidden />
      <View style={style.form}>
        <Label style={style.label}>Dados Pessoais</Label>
        <TextInput placeholder="NOME" style={style.input} />
        <TextInput placeholder="SOBRENOME" style={style.input} />
        <DatePicker
          placeholder="DATA DE NASCIMENTO"
          date={this.state.date}
          format="DD-MM-YYYY"
          minDate="01-01-1753"
          maxDate="01-01-2030"
          confirmBtnText="OK"
          cancelBtnText="Cancelar"
          style={style.date}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <TextInput placeholder="RG" style={style.input} />
        <TextInput placeholder="CPF" style={style.input} />
        <Button style={style.button}>
          <Text> Avançar </Text>
        </Button>
      </View>
      <View>
        <Text style={style.return} onPress={props.onSignup}>
          Voltar
        </Text>
      </View>
    </Container>
  );
};

export default SignupPageOnePresentation;
