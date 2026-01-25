import React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Drawer } from 'expo-router/drawer';

import Icon from '@flexnative/icons';
import ThemeContext from '@flexnative/theme-context';

import DrawerContent from '@/screens/components/Navigation/CustomDrawerContent';


export default class DrawerScreen extends PureComponent {

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  render(): ReactNode {
    return (
      <Drawer
        screenOptions={{
          drawerType: "slide",
          drawerStyle: {
            width: 250,
            backgroundColor: this.context.colors.primary
          },
          drawerInactiveTintColor: 'white',
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
          options={{
            title: "Home",
            drawerIcon: (props) => <Icon name="star" size={props.size} color={props.color}/> 
          }}
        />
        <Drawer.Screen
          name="Modal"
          options={{
            title: "Modal",
            drawerIcon: (props) => <Icon name="modal" size={props.size} color={props.color}/> 
          }}
        />
        <Drawer.Screen
          name={'Chat'}
          options={{
            title: "Char",
            drawerIcon: (props) => <Icon name="popup" size={props.size} color={props.color}/> 
          }}
        />
      </Drawer>
    );
  }
}