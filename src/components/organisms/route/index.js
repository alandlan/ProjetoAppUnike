import { createAppContainer } from 'react-navigation';
import { SwitchNavigator } from './navigator';

const Routes = createAppContainer(SwitchNavigator);

export { Routes };
