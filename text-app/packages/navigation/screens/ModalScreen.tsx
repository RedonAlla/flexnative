import React from "react";
import { TouchableOpacity, View, Text , StyleSheet} from "react-native";
import { withFancyDrawer } from "../src/with-fancy-drawer";

function ModalScreen(props: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Tab One</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
});
