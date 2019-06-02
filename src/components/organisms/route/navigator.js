import { createStackNavigator } from 'react-navigation';
import { HomePage, LoginPage, LogoutPage } from '../../pages';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home Page'
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Login',
        header: null
      }
    },
    Logout: {
      screen: LogoutPage,
      navigationOptions: {
        title: 'Logout'
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);
export { StackNavigator };
