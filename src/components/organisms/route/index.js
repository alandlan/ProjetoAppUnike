import { createAppContainer } from 'react-navigation';
import { StackNavigator } from './navigator';

const Routes = createAppContainer(StackNavigator);

export { Routes, StackNavigator };
