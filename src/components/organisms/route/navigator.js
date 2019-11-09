import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomePage,
  LoginPage,
  LogoutPage,
  LoadingPage,
  SignupContactData,
  SignupCategoriesRegister,
  SignupProfessionalRegister,
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
  SignupContactData: {
    screen: SignupContactData,
    navigationOptions: {
      header: null
    }
  },
  SignupProfessionalRegister: {
    screen: SignupProfessionalRegister,
    navigationOptions: {
      header: null
    }
  },
  SignupCategoriesRegister: {
    screen: SignupCategoriesRegister,
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
