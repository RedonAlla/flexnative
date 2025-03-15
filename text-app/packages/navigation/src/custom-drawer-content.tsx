
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';


import Avatar from '@flexnative/avatar';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


//const profilePic = require("../../../assets/demo-navigations/Profile1.png");

/**
 * The drawer itself
 */
export default (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} >
      {/* <Avatar source={profilePic} /> */}
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

const Separator = () => (
	<View style={styles.container}></View>
)

const styles = StyleSheet.create({
  container: {
		margin: 15,
		height: 1,
		width: '100%',
		backgroundColor: '#ffffff30',
  }
});