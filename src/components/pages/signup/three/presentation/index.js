import React, { Component } from 'react';
import { Text, View, CheckBox } from 'react-native';
import { style } from './styles';

//const SignupPageTwoPresentation = props => {
export default class SignupPageThreePresentation extends Component {
  constructor() {
    super();
    this.state = {
      check: false
    };
  }

  CheckBox() {
    this.setState({
      check: !this.state.check
    });
  }

  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox value={this.state.check} onChange={() => this.CheckBox()} />
          <Text style={{ marginTop: 5 }}>Unha</Text>
        </View>
      </View>
    );
  }
}

//export default SignupPageTwoPresentation;
