import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Timeline from './Timeline/timeline';
import UploadPost from './UploadPost/uploadPost';
import DrawerContent from './drawerContent';

const InnerStack = createStackNavigator(
    {
        Timeline:Timeline,
        UploadPost:UploadPost
    },
    {
        initialRouteName:"Timeline",
        headerMode:"none",
        navigationOptions:{
            headerVisible:"false"
        }
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        InnerStack:InnerStack
    },
    {
        initialRouteName:"InnerStack",
        minSwipeDistance:50,
        drawerWidth:200,
        contentComponent:DrawerContent
    }
)

export default createAppContainer(DrawerNavigator);