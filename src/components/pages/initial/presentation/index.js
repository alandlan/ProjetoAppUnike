import React from 'react';
import { Container, Content, Text, H1, Button } from 'native-base';
import { Image, ImageBackground, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { banner, logo } from '../../../../images';
import style from './style';

const InitialPresentation = props => {
  return (
    <Container>
      <Grid>
        <Row style={style.logo}>
          <Image source={logo} />
        </Row>
        <Row>
          <ImageBackground source={banner} style={style.banner} />
        </Row>
        <Row style={style.message}>
          <H1 style={style.messageTitle}>Bem vindo ao app do Profissional</H1>
          <Text style={style.messageText}>
            Receba e selecione os serviços que deseja, criando assim sua própria agenda!
          </Text>
        </Row>
        <Row style={style.action}>
          <Button block primary onPress={props.onGoSignIn}>
            <Text>Tenho uma conta</Text>
          </Button>

          <Button block bordered onPress={props.onGoSignUp}>
            <Text>Não tenho conta</Text>
          </Button>
        </Row>
      </Grid>
    </Container>
  );
};

export default InitialPresentation;
