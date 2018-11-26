import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { HomeScreen, LoginScreen, AuthLoadingScreen } from './screens'

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen }, { headerMode: 'none' });

export default createAppContainer(createSwitchNavigator(
	{
	  App: AppStack,
	  Auth: AuthStack,
	  AuthLoading: AuthLoadingScreen
	},
	{
	  initialRouteName: 'AuthLoading',
	}
  ));