import React from 'react';
import { PureComponent, ReactNode } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawer } from 'expo-router/drawer';

import {withFancyDrawer} from './with-fancy-drawer';
import { DrawerRoutes, NavigationConstants } from './types';
import DrawerContent from './custom-drawer-content';

import ModalScreen from '../screens/ModalScreen';
import ChatScreen from '../screens/Chat';
import ButtonsScreen from '../screens/TabOneScreen';
import ComponentsNavigator from '../screens/TabTwoScreen';
import { Ionicons } from '@expo/vector-icons';



//const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default class DrawerScreen extends PureComponent<{}, {}> {
  render(): ReactNode {
    return (
      // <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <Drawer
          screenOptions={{
            drawerType: "slide",
            headerShown: true,
            drawerStyle: {
              width: 220,
              backgroundColor: 'rgb(140, 201, 125)'//this.context.colors.primary
            },
            sceneStyle: {
              backgroundColor: 'red'
            },
            drawerInactiveTintColor: 'blue',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: '#ffffff30',
            overlayColor: 'transparent',
            headerTitleStyle: {
              fontFamily: 'fontRegular',
            },
          }}
          initialRouteName={NavigationConstants.HomeScreen}
          drawerContent={DrawerContent}>
          <Drawer.Screen
            name="Home"
            // component={ModalScreen}
            options={{
              title: "Home",
              drawerIcon: (props) => <Ionicons name="home" size={props.size} color={props.color}/> 
            }}
          />
          <Drawer.Screen
            name="Components"
            // component={withFancyDrawer(ComponentsNavigator)}
            options={{
              title: "Components",
              drawerIcon: (props) => <Ionicons name="logo-firebase" size={props.size} color={props.color}/> 
            }}
          />
          {/* <Drawer.Screen
            name={NavigationConstants.OtherScreen}
            // component={ButtonsScreen}
            options={{
              title: "Others",
              drawerIcon: (props) => <Ionicons name="logo-edge" size={props.size} color={props.color}/> 
            }}
          />
          <Drawer.Screen
            name={'ChatScreen'}
            // component={ChatScreen}
            options={{
              title: "Chat",
              drawerIcon: (props) => <Ionicons name="chatbubble-ellipses-outline" size={props.size} color={props.color}/> 
            }}
          /> */}
        </Drawer>
      // </NavigationContainer>
    );
  }
}