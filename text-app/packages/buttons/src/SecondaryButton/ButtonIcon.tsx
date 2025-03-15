import * as React from "react";
import { Image, StyleSheet } from "react-native";

interface ButtonIconProps {
  /**
   * The URL of the icon to display
   */
  iconUrl: string;
  /**
   * Additional styles to apply to the icon
   */
  style?: object;
}

/**
 * Icon component for buttons
 */
const ButtonIcon: React.FC<ButtonIconProps> = ({ iconUrl, style }) => {
  return (
    <Image
      source={{ uri: iconUrl }}
      style={[styles.icon, style]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default React.memo(ButtonIcon);
