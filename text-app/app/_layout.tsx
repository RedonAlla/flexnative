import React, { useEffect } from 'react';
import { PureComponent, ReactNode } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from "expo-router";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawer } from 'expo-router/drawer';

import { Ionicons } from '@expo/vector-icons';

import DrawerContent from '../packages/navigation/src/custom-drawer-content';
import ThemeContext, { createTheme, FontSize } from '@flexnative/theme-context';

import {
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic
} from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();


//const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

let customFonts: Record<string, any> = {
  'Bold': Roboto_700Bold,
  'Regular': Roboto_400Regular,
  'Medium': Roboto_500Medium,
  'Italic': Roboto_400Regular_Italic,
  'ItalicSemiBold': Roboto_500Medium_Italic,
  'Icons': require('../assets/fonts/icons.ttf')
};



export default function Layout() {
  const [fontsLoaded, fontsError] = useFonts(customFonts);
  /**
   * Handle font loading errors using an effect
   */
  useEffect(() => {
    if (fontsError)
      throw fontsError;
    
  }, [fontsError]);

  /**
   * Hide the splash screen when fonts are loaded
   */
  useEffect(() => {
    if (fontsLoaded)
      SplashScreen.hideAsync();
    
  }, [fontsLoaded]);

  /**
   * Return null while waiting for fonts to load to prevent rendering issues
   */
  if (!fontsLoaded)
    return null;

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
            name="Chat"
            // component={ModalScreen}
            options={{
              title: "Chat",
              drawerIcon: (props) => <Ionicons name="chatbox" size={props.size} color={props.color}/> 
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