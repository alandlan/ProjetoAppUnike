import { createAppContainer, createStackNavigator } from 'react-navigation';
import { HomePage, LoginPage } from '../../pages/index';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'sdfsdfsdfsdf'
      }
    },
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const Routes = createAppContainer(AppNavigator);

export { Routes };
