/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-03 14:48:29
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-07 22:00:47
 * @ Description: An example Drawer container.
 */

import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';


import Avatar from '@flexnative/avatar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DEMO_COMPONENT_GAP, HEADER_HEIGHT } from '@/constants/layout';


const profilePic = require("../../../assets/icon.png");

/**
 * CustomDrawerContent component renders the content of the drawer.
 * 
 * @param {DrawerContentComponentProps} props - The properties passed to the drawer content component.
 * @returns {JSX.Element} The rendered drawer content.
 * 
 * @component
 * @example
 * return (
 *   <CustomDrawerContent {...props} />
 * )
 */
export default (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={styles.container} {...props} >
      <Avatar style={styles.avatar} source={profilePic} size='large' />
      <DrawerItemList {...props} />
      <Separator />
      <DrawerItem
        label="Logout"
        activeTintColor='white'
        inactiveTintColor='white'
        icon={(props) => <Ionicons name="log-out-outline" size={props.size} color={props.color}/> }
        onPress={() => console.log('help')}
      />
    </DrawerContentScrollView>
  );
}

/**
 * A functional component that renders a separator line.
 *
 * @returns {JSX.Element} A view styled as a separator.
 */
const Separator = () => (
	<View style={styles.separator}></View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: HEADER_HEIGHT + DEMO_COMPONENT_GAP
  },
  avatar: {
    marginBottom: DEMO_COMPONENT_GAP
  },
  separator: {
		margin: 15,
		height: 1,
		width: '100%',
		backgroundColor: '#ffffff30',
  }
});