import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213380Navigator from '../features/BlankScreen213380/navigator';
import BlankScreen113027Navigator from '../features/BlankScreen113027/navigator';
import BlankScreen012922Navigator from '../features/BlankScreen012922/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213380: { screen: BlankScreen213380Navigator },
BlankScreen113027: { screen: BlankScreen113027Navigator },
BlankScreen012922: { screen: BlankScreen012922Navigator },

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
