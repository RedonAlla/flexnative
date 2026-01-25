import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { withFancyDrawer } from "@flexnative/navigation";
import Button from "@flexnative/buttons";


function HomeScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button text='Open Drawer' iconLeft='menu' />
      <Button text='Go Back' iconLeft='chevron-left' />
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


export default withFancyDrawer(HomeScreen);