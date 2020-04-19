import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login/login';
import Register from './Register/register';

const MainStack = createStackNavigator({
    Login: Login,
    Register: Register,

}, {
    initialRouteName: 'Login',
    
  headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
});

export default createAppContainer(MainStack);