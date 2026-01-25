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
 * The drawer itself
 */
export default (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={styles.container} {...props} >
      <Avatar style={styles.avatar} source={profilePic} size='large' />
      <DrawerItemList {...props} />
      <Separator />
      <DrawerItem
        label="Logout"
        icon={(props) => <Ionicons name="log-out-outline" size={props.size} color={props.color}/> }
        onPress={() => console.log('help')}
      />
    </DrawerContentScrollView>
  );
}

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