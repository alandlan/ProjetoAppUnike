import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomePage,
  LoginPage,
  LogoutPage,
  LoadingPage,
  SignupPageOne,
  SignupPageTwo,
  SignupPageThree,
  InitialPage
} from '../../pages';

const AppStackNavigator = createStackNavigator({
  Home: HomePage
});

const AuthStackNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  }
});

const SignUpStackNavigator = createStackNavigator({
  SignUpOne: {
    screen: SignupPageOne,
    navigationOptions: {
      header: null
    }
  },
  SignUpTwo: {
    screen: SignupPageTwo,
    navigationOptions: {
      header: null
    }
  },
  SignupThree: {
    screen: SignupPageThree,
    navigationOptions: {
      header: null
    }
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    Initial: InitialPage,
    AuthLoading: LoadingPage,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
    SignUp: SignUpStackNavigator
  },
  {
    initialRouteName: 'Initial'
  }
);
export { SwitchNavigator };
