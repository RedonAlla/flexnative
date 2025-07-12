/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: The code defines a CheckBox component in React Native, allowing users to select or deselect an option.
 *                It's highly customizable through props, controlling appearance (type, size, radius, colors, border), behavior (disabled state, value change callback), and content (label, custom check/uncheck elements).
 *                The component leverages theming from `@flexnative/theme-context` for consistent styling and uses icons from `@flexnative/icons` for the checkmark.
 *                It renders a Pressable for interaction, updating its visual state based on whether it's pressed, checked, or disabled.
 */

import React from "react";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import { BaseColors, useThemeState } from "@flexnative/theme-context";

import Icon from "@flexnative/icons";
import { getStyle } from "../shared/input.utilities";
import { CheckProps } from "./props";
import { createStyles } from "./styles";
import { DISABLED_OPACITY } from "../input.constants";
import FalsyComponent from "../shared/components/FalsyComponent";


/**
 * The `CheckBox` component allows users to select or deselect an option.
 * It supports various styling options, including different types, sizes, border radii, colors, and shadow effects.
 * It leverages the `@flexnative/theme-context` for theming and `@flexnative/icons` for the checkmark icon.
 * 
 * @param {CheckProps<T>} props - The properties for the CheckBox component.
 * @param {T} props.value - The current value of the checkbox. Determines whether it is checked or unchecked.
 * @returns {React.ReactElement} The rendered CheckBox component.
 */
const CheckBox = <T extends unknown>({
  value,
  type = "default",
  size = "medium",
  radius = "medium",
  borderWidth = "hairline",
  borderColor,
  checkedBorderColor,
  disabled,
  color = "primary",
  backgroundColor,
  checkedBackgroundColor,
  label,
  labelStyle,
  checkElement,
  unCheckElement,
  style,
  onValueChange,
  ...other
}: CheckProps<T>): React.ReactElement => {
  const theme = useThemeState<BaseColors>();

  const styles = createStyles({
    type,
    color,
    size,
    radius,
    borderWidth,
    borderColor,
    checkedBorderColor: checkedBorderColor!,
    backgroundColor,
    checkedBackgroundColor,
  }, theme,
);

  const handleChange = React.useCallback(() => {
    onValueChange?.(value as T);
  }, [onValueChange, value]);

  return (
    <Pressable
      role="checkbox"
      {...other}
      disabled={disabled}
      onPress={handleChange}
      style={[
        styles.container,
        { opacity: disabled ? DISABLED_OPACITY : 1 },
        style as StyleProp<ViewStyle>,
      ]}
    >
      {({ pressed }) => (
        <>
          <FalsyComponent
            style={[
              styles.checkBox,
              type === 'default' && (value ? styles.typeDefaultChecked : styles.typeDefault),
              type === 'ghost' && (value ? styles.typeGhostChecked : styles.typeGhost),
              type === 'solid' && (value ? styles.typeSolidChecked : styles.typeSolid),
              type === 'outlined' && (value ? styles.typeOutlinedChecked : styles.typeOutlined),
              pressed && styles.checkBoxPressed,
            ]}
            reactElement={value ? checkElement : unCheckElement}
            component={
              <View>
                { value && <Icon name='check' style={styles.icon} /> }
              </View>
            }
          />
          <Text style={[styles.label, getStyle<TextStyle>(labelStyle, Boolean(value))]} >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default CheckBox;