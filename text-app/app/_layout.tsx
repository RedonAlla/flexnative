import React from 'react';
import { PureComponent, ReactNode } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawer } from 'expo-router/drawer';

import { Ionicons } from '@expo/vector-icons';

import DrawerContent from '../packages/navigation/src/custom-drawer-content';



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
            //headerShown: false,
            drawerStyle: {
              width: 250,
              backgroundColor: 'rgb(140, 201, 125)'//this.context.colors.primary
            },
            sceneStyle: {
              //backgroundColor: 'rgb(140, 201, 125)'
            },
            drawerInactiveTintColor: 'blue',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: '#ffffff30',
            overlayColor: 'transparent',
            headerTitleStyle: {
              fontFamily: 'fontRegular',
            },
          }}
          initialRouteName={'Home'}
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
          <Drawer.Screen
            name={'Modal'}
            // component={ButtonsScreen}
            options={{
              title: "Others",
              drawerIcon: (props) => <Ionicons name="logo-edge" size={props.size} color={props.color}/> 
            }}
          />
         {/*  <Drawer.Screen
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