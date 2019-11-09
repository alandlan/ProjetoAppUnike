import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomePage,
  LoginPage,
  LogoutPage,
  LoadingPage,
  SignupContactData,
  SignupCategories,
  SignupProfessional,
  SignupLocalization,
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
  SignupProfessional: {
    screen: SignupProfessional,
    navigationOptions: {
      header: null
    }
  },
  SignupCategories: {
    screen: SignupCategories,
    navigationOptions: {
      header: null
    }
  },
  SignupLocalization: {
    screen: SignupLocalization,
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
