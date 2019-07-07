import React from 'react';
import { Container, Label, Button } from 'native-base';
import { Text, View } from 'react-native';
import style from './style';

const SignupPageTwoPresentation = props => {
  return (
    <Container>
      <View style={style.form}>
        <View>
          <Label style={style.label}>Selecione os serviços que oferece</Label>
        </View>
        <View>
          <Text style={style.info}>
            Você pode selecionar mais que 1 opção(é necessário possuir diploma ou certificado)
          </Text>
        </View>

        <View>
          <Button style={style.button}>
            <Text>Avançar</Text>
          </Button>
        </View>
      </View>
      <View>
        <Text style={style.return} onPress={props.onBack}>
          Voltar
        </Text>
      </View>
    </Container>
  );
};

export default SignupPageTwoPresentation;
