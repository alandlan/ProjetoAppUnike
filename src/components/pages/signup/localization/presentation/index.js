import React, { Component } from 'react';
import { HeaderSignup } from '../../../../templates';
import { Container, Form, Item, Label, Input, Content, Icon, Text, Header } from 'native-base';
import TextInputMask from 'react-native-text-input-mask';

const SignupLocalizationPresentation = props => {
  return (
    <Container>
      <HeaderSignup disable={props.disabled} onBack={props.onBack} onForward={props.onForward} />
      <Content>
        <Form>
          {/* <Item stackedLabel error={!props.data.cep.valid}>
            <Label>Cep</Label>
            <Input value={props.data.cep.value} onChangeText={props.onChangeForm('cep')} />
          </Item>

          <Item stackedLabel error={!props.data.address.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Endereço</Label>
            <Input value={props.data.address.value} onChangeText={props.onChangeForm('address')} />
          </Item>
          <Item stackedLabel error={!props.data.number.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Número</Label>
            <Input
              value={props.data.number.value}
              onChangeText={props.onChangeForm('number')}
              //   keyboardType="number-pad"
            />
          </Item>
          <Item
            stackedLabel
            error={!props.data.neighborhood.valid}
            style={{ alignItems: 'flex-start' }}
          >
            <Label>Bairro</Label>
            <Input
              value={props.data.neighborhood.value}
              onChangeText={props.onChangeForm('neighborhood')}
            />
          </Item> */}
          <Item
            stackedLabel
            error={!props.data.complement.valid}
            style={{ alignItems: 'flex-start' }}
          >
            <Label>Complemento</Label>
            <Input
              value={props.data.complement.value}
              onChangeText={props.onChangeForm('complement')}
            />
          </Item>
          <Item stackedLabel error={!props.data.city.valid} style={{ alignItems: 'flex-start' }}>
            <Label>Cidade</Label>
            <Input value={props.data.city.value} onChangeText={props.onChangeForm('city')} />
          </Item>
          <Item stackedLabel error={!props.data.uf.valid} style={{ alignItems: 'flex-start' }}>
            <Label>UF</Label>
            <Input value={props.data.uf.value} onChangeText={props.onChangeForm('uf')} />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupLocalizationPresentation;
