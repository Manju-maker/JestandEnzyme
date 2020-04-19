import {createAppContainer,createSwitchNavigator,withNavigation} from 'react-navigation';
import MainStack from './mainStack'
import AppAuthenticate from './appAuthenticate';
import DrawerNavigator from './innerStack';

 const AppNavigator = createSwitchNavigator(
    {
        AppAuthenticate:AppAuthenticate,
        MainStack:MainStack,
        DrawerNavigator:DrawerNavigator
    },
    {
        initialRouteName:"AppAuthenticate"
    }
)

export default createAppContainer(AppNavigator);