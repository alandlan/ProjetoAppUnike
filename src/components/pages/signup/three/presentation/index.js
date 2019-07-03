import React, { Component } from 'react';
import { Text, View, CheckBox } from 'react-native';
import style from './style';

import { Container, Label, Button } from 'native-base';

//const SignupPageTwoPresentation = props => {
export default class SignupPageThreePresentation extends Component {
  constructor() {
    super();
    this.state = {
      unhaCheck: false,
      cabeloCheck: false,
      maquiagemcheck: false,
      sobrancelhacheck: false,
      depmascheck: false,
      depfemcheck: false,
      massagemcheck: false
    };
  }

  unhaCheckBox() {
    this.setState({
      unhaCheck: !this.state.unhaCheck
    });
  }

  cabeloCheckBox() {
    this.setState({
      cabeloCheck: !this.state.cabeloCheck
    });
  }

  maquiagemCheckBox() {
    this.setState({
      maquiagemcheck: !this.state.maquiagemcheck
    });
  }

  sobrancelhaCheckBox() {
    this.setState({
      sobrancelhacheck: !this.state.sobrancelhacheck
    });
  }

  depmasCheckBox() {
    this.setState({
      depmascheck: !this.state.depmascheck
    });
  }

  depfemCheckBox() {
    this.setState({
      depfemcheck: !this.state.depfemcheck
    });
  }

  massagemCheckBox() {
    this.setState({
      massagemcheck: !this.state.massagemcheck
    });
  }

  render() {
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
          <View style={style.checkbox}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox value={this.state.unhaCheck} onChange={() => this.unhaCheckBox()} />
                <Text style={{ marginTop: 5 }}>Unha</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox value={this.state.cabeloCheck} onChange={() => this.cabeloCheckBox()} />
                <Text style={{ marginTop: 5 }}>Cabelo</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.maquiagemcheck}
                  onChange={() => this.maquiagemCheckBox()}
                />
                <Text style={{ marginTop: 5 }}>Maquiagem</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.sobrancelhacheck}
                  onChange={() => this.sobrancelhaCheckBox()}
                />
                <Text style={{ marginTop: 5 }}>Sobrancelha</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox value={this.state.depmascheck} onChange={() => this.depmasCheckBox()} />
                <Text style={{ marginTop: 5 }}>Depilação Masculina</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox value={this.state.depfemcheck} onChange={() => this.depfemCheckBox()} />
                <Text style={{ marginTop: 5 }}>Depilação Feminina</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={this.state.massagemcheck}
                  onChange={() => this.massagemCheckBox()}
                />
                <Text style={{ marginTop: 5 }}>Massagem</Text>
              </View>
            </View>
          </View>
          <View>
            <Button style={style.button}>
              <Text>Avançar</Text>
            </Button>
          </View>
        </View>
        <View>
          <Text style={style.return}>Voltar</Text>
        </View>
      </Container>
    );
  }
}

//export default SignupPageTwoPresentation;
