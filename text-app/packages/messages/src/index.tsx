/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-17 22:02:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-31 00:12:33
 * @ Description: This module exports the Message component.
 */

import React from "react";
import { Text, View } from "react-native";
import { useThemeState } from "@flexnative/theme-context";
import Icon from "@flexnative/icons";

import { MessageBoxProps } from "./props";
import createStyles from "./styles";
import { getIcon } from "./utilities";


/**
 * A customizable Message component for displaying various types of messages.
 * 
 * @param {MessageBoxProps} props - The properties for the Message component.
 * @returns {JSX.Element} The Message component.
 */
const Message: React.FC<MessageBoxProps> = ({
  radius = "medium",
  borderWidth = "none",
  fill = "ghost",
  size = "medium",
  type = "default",
  icon = undefined,
  title,
  children,
  text,
  style,
  ...rest
}) => {
  const theme = useThemeState();

  // Memoize styles to avoid recalculating on every render if props haven't changed
  const styles = React.useMemo(
    () =>
      createStyles(
        {
          radius,
          borderWidth,
          fill,
          size,
          type,
        },
        theme
      ),
    [radius, borderWidth, fill, size, type, theme]
  );

  const hasIcon = icon !== null;

  return (
    <View style={[
      styles.container,
      { flexDirection: hasIcon ? 'row' : 'column' },
      style
      ]} {...rest}>
      {
        children ??
          <>
            {hasIcon && <Icon name={getIcon(icon!, type)} style={styles.icon} />}
            <View style={styles.messageContainer}>
                { title && <Text style={[styles.text, styles.title]}>{title}</Text> }
              <Text style={styles.text}>{text}</Text>
            </View>
          </>
        }
    </View>
  );
};

export default Message;
