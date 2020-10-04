import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile125484Navigator from '../features/UserProfile125484/navigator';
import Tutorial125483Navigator from '../features/Tutorial125483/navigator';
import NotificationList125455Navigator from '../features/NotificationList125455/navigator';
import Settings125454Navigator from '../features/Settings125454/navigator';
import Settings125446Navigator from '../features/Settings125446/navigator';
import UserProfile125444Navigator from '../features/UserProfile125444/navigator';
import Settings125407Navigator from '../features/Settings125407/navigator';
import Settings125390Navigator from '../features/Settings125390/navigator';
import Settings125356Navigator from '../features/Settings125356/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile125484: { screen: UserProfile125484Navigator },
Tutorial125483: { screen: Tutorial125483Navigator },
NotificationList125455: { screen: NotificationList125455Navigator },
Settings125454: { screen: Settings125454Navigator },
Settings125446: { screen: Settings125446Navigator },
UserProfile125444: { screen: UserProfile125444Navigator },
Settings125407: { screen: Settings125407Navigator },
Settings125390: { screen: Settings125390Navigator },
Settings125356: { screen: Settings125356Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
