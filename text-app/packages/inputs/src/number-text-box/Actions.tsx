/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-10 21:37:13
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:06:36
 * @ Description: The code defines an Actions component for a numeric input field, likely as part of a larger component like NumericTextBox.
 *                This Actions component provides buttons to increment and decrement the numeric value in the input. Let's break down the code:
 */

import React from "react";
import { Pressable, View, ColorValue } from "react-native";

import Icon from "@flexnative/icons";
import { actionStyles, baseActionStyles } from "./NumericTextBox.styles";


/**
 * The configuration options for an {@link ActionItem} component, allowing you to control its appearance (icon and active color),
 * behavior (disabled state and the action to perform), and interaction (through the action function).
 */
type ActionItemProps = {
  /**
   * This indicates whether the action item (like increment and decrement button) is disabled.
   */
  disabled?: boolean;

  /**
   * This specifies the icon to display on the action item.
   * It can only be one of two values: 'caret-up' or 'caret-down', likely representing an up arrow or a down arrow.
   */
  icon: 'caret-up' | 'caret-down';

  /**
   * This defines a function that will be executed when the action item is pressed.
   * 
   * () => void means it's a function that takes no arguments and returns nothing (void).
   * @returns void
   */
  action: () => void;

  /**
   *  This sets the color that the action item will display when it's in an active (pressed) state.
   * ColorValue is likely a type from the React Native library that represents a valid color (e.g., a hex code, a color name, or an RGBA value).
   */
  activeColor: ColorValue;
}


/**
 * The `Actions` component provides a user interface for incrementing and decrementing a numeric value within a `NumericTextBox`.
 * It renders two buttons, typically represented by "caret-up" and "caret-down" icons, which trigger the `onIncrement` and `onDecrement` callbacks respectively.
 * 
 *  @component
 *
 * @param {ActionsProps} props - The properties passed to the `Actions` component.
 * @returns {JSX.Element} A React element representing the `Actions` component, which includes the increment and decrement buttons.
 *
 * @example
 * // Example usage within a NumericTextBox component:
 * <Actions
 *   onIncrement={() => setValue(value + step)}
 *   onDecrement={() => setValue(value - step)}
 *   disabled={isDisabled}
 *   activeColor={theme.colors.primary}
 *   size={24}
 *   radius={4}
 * />
*/
const ActionItem: React.FC<ActionItemProps> = ({ disabled, icon, action, activeColor }) => {
  const getButtonStyle = ({ pressed }: { pressed: boolean }) => {
    return [
      baseActionStyles.action,
      { backgroundColor: pressed ? activeColor : 'transparent' },
    ];
  };

  return (
    <Pressable
      onPress={action}
      disabled={disabled}
      style={getButtonStyle}>
      <Icon name={icon} style={baseActionStyles.icon} />
    </Pressable>
  );
};


/**
 * Props for the Actions component.
 */
type ActionsProps = {
  /**
   * Callback function to be executed when the increment action is triggered.
   */
  onIncrement: () => void;
  /**
   * Callback function to be executed when the decrement action is triggered.
   */
  onDecrement: () => void;
  /**
   * Determines if the actions should be disabled.
   */
  disabled: boolean;
  /**
   * The color to be used when an action is active (pressed).
   */
  activeColor: ColorValue;
  /**
   * The size of the action buttons.
   */
  size: number;
  /**
   * The border radius of the action buttons.
   */
  radius: number;
}

/**
 * Represents a single action item within the NumericTextBox, such as an increment or decrement button.
 *
 * @class ActionItem
 * @extends {React.PureComponent<ActionItemProps>}
 */
const Actions: React.FC<ActionsProps> = ({
  disabled,
  size,
  radius,
  activeColor,
  onIncrement,
  onDecrement,
}) => {
  const styles = actionStyles(size, radius);

  return (
    <View style={styles.wrapper}>
      <ActionItem
        icon="caret-up"
        disabled={disabled}
        activeColor={activeColor}
        action={onIncrement}
      />
      <ActionItem
        icon="caret-down"
        disabled={disabled}
        activeColor={activeColor}
        action={onDecrement}
      />
    </View>
  );
};

export default Actions;