import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { HomePage, LoginPage, LogoutPage, LoadingPage } from '../../pages';

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

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingPage,
    App: AppStackNavigator,
    Auth: AuthStackNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
export { SwitchNavigator };
