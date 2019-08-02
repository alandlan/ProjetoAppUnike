import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

const HeaderSignupPresentation = props => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={props.onBack}>
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>Dados de contato</Title>
      </Body>
      <Right>
        <Button transparent disabled={props.disabled} onPress={props.onForward}>
          <Text>AVANÇAR</Text>
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderSignupPresentation;
