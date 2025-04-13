/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-28 12:13:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-13 17:21:06
 * @ Description: A versatile component for displaying tags with customizable styles and optional delete functionality.
 */

import React from "react";
import { Pressable, Text, View } from "react-native";

import Icon from "@flexnative/icons";
import { useThemeState } from "@flexnative/theme-context";

import TagProps from "./props";
import createStyles from "./styles";


/**
 * Tag component for displaying tags with customizable styles.
 *
 * @param {TagProps} props - The properties for the Tag component.
 * @returns {JSX.Element} The rendered Tag component.
 * 
 * @example
 * // Basic tag
 * <Tag text="Basic Tag" />
 *
 * @example
 * // Outline tag with custom color
 * <Tag text="Outline Tag" type="outline" color="primary" />
 *
 * @example
 * // Ghost tag with custom text color
 * <Tag text="Ghost Tag" type="ghost" textColor="#007bff" />
 *
 * @example
 * // Tag with delete button
 * <Tag text="Deletable Tag" onDelete={() => console.log("Tag deleted")} />
 *
 * @example
 * // Tag with custom children
 * <Tag>
 *   <Text>Custom Content</Text>
 * </Tag>
 *
 * @example
 * // Tag with custom style
 * <Tag text="Styled Tag" style={{ padding: 10, margin: 5 }} />
 *
 * @example
 * // Tag with custom textProps
 * <Tag text="Styled Text Tag" textProps={{ style: { fontWeight: 'bold' } }} />
 */
const Tag: React.FC<TagProps> = ({
  text,
  type = "solid",
  size = "medium",
  color = "default",
  textColor,
  backgroundColor,
  radius = "medium",
  borderWidth = "none",
  borderColor,
  style,
  children,
  onDelete,
  textProps = {},
  ...restProps
}: TagProps): JSX.Element => {
  const themeState = useThemeState();

  // Memoize styles to avoid recalculating on every render
  const styles = React.useMemo(
    () =>
      createStyles(
        {
          type,
          color,
          size,
          radius,
          textColor,
          borderWidth,
          borderColor,
          backgroundColor,
        },
        themeState
      ),
    [type, color, size, radius, textColor, borderWidth, borderColor, backgroundColor, themeState]
  );

  const { style: textStyles, ...restTextProps } = textProps;

  return (
    <View style={[styles.container, style]} {...restProps}>
      {children || (
        <>
          <Text style={[styles.text, textStyles]} {...restTextProps}>
            {text}
          </Text>
          {onDelete && (
            <Pressable
              onPress={onDelete}
              style={({ pressed }) => [
                styles.deleteButton,
                { opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Icon name="close-circle" style={styles.delete} />
            </Pressable>
          )}
        </>
      )}
    </View>
  );
};

export default Tag;