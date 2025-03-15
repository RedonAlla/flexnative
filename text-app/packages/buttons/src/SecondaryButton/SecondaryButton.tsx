import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonIcon from "./ButtonIcon";

interface SecondaryButtonProps {
  /**
   * The text to display on the button
   */
  label?: string;
  /**
   * The icon URL to display on the button
   */
  iconUrl?: string;
  /**
   * Function to call when button is pressed
   */
  onPress?: () => void;
  /**
   * Additional styles to apply to the button
   */
  style?: object;
}

/**
 * A secondary button component with icon and text
 */
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label = "Button",
  iconUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/281d13d06c9382b61180d9aa2ba2c478ea539bc98884409b41c74928735c8b82?placeholderIfAbsent=true&apiKey=210b4d8ba4f2410f80bee77b40836cad",
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, style]}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.02)"]}
        style={styles.buttonContainer}
      >
        {iconUrl && <ButtonIcon iconUrl={iconUrl} />}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.08)",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    gap: 4,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
  },
  labelContainer: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  labelText: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#424242",
    fontWeight: "400",
    textAlign: "center",
  },
});

export default React.memo(SecondaryButton);
