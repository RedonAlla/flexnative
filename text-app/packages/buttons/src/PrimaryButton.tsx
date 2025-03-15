import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

interface PrimaryButtonProps {
  /**
   * The text to display inside the button
   */
  text?: string;

  /**
   * Function to call when button is pressed
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Additional styles for the button container
   */
  style?: ViewStyle;

  /**
   * Additional styles for the button text
   */
  textStyle?: TextStyle;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
}

/**
 * A small primary button component with solid fill
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text = "Button",
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.buttonContainer, disabled && styles.buttonDisabled, style]}
    >
      <View style={styles.buttonBase}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonBase: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FF6358",
    alignSelf: "stretch",
    display: "flex",
    paddingHorizontal: 9,
    paddingVertical: 3,
    gap: 4,
    backgroundColor: "#FF6358", // Since RN doesn't support gradients directly, using solid color
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#FFF",
    fontWeight: "400",
    textAlign: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default PrimaryButton;
