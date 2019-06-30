import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomePage,
  LoginPage,
  LogoutPage,
  LoadingPage,
  SignupPageOne,
  SignupPageTwo
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
const SignupStackNavigator = createStackNavigator({
  SignUp: {
    screen: SignupPageOne,
    navigationOptions: {
      header: null
    }
  }
});
const SignupTwoStackNavigator = createStackNavigator({
  SignupTwo: {
    screen: SignupPageTwo,
    navigationOptions: {
      header: null
    }
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingPage,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
    Signup: SignupStackNavigator,
    SignupTwo: SignupTwoStackNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
export { SwitchNavigator };
