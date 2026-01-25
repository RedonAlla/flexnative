import React from "react";
import { View, Text, StyleSheet} from "react-native";
import {
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import { withFancyDrawer } from "@flexnative/navigation";
import Button from "@flexnative/buttons";


function ModalScreen(props: any) {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Modal Screen</Text>
      <Button text='Open Drawer' iconLeft='menu' color='primary' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <Button text='Go Back' iconLeft='chevron-left' color='secondary' onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default withFancyDrawer(ModalScreen);