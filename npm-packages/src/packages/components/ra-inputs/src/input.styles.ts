import { ColorValue, StyleSheet } from "react-native";
import { BaseTheme } from "@flexnative/theme-context";

import { InputType, InputColor, Sizes, BorderRadius, BorderWidth } from "./input.props";
import { getBackgroundColor, getBorderRadius, getBorders, getColor, getTextSize } from "./input.utilities";
import { MAT_ICON_MULTIPLIER, PADDING_HORIZONTAL_MULTIPLIER, PADDING_VERTICAL_MULTIPLIER, TEXT_HELPER_MULTIPLIER } from "./input.constants";


type ContainerProps = {
  type: InputType;
  color: InputColor;
  size: Sizes;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  readOnly?: boolean;
  readonly?: boolean;
  borderColor?: InputColor;
  activeBorderColor?: ColorValue;
  backgroundColor?: ColorValue;
  activeBackgroundColor?: ColorValue;
  //focusedBorders?: boolean;
  material?: boolean;
  theme: {
    colors: BaseTheme,
    isDark: boolean
  }
}

export const createStyles = (props: ContainerProps) => {
  const fontSize = getTextSize(props.size);
  const color = getColor(props.theme.colors, props.color);
  const backgroundColor = getBackgroundColor(props.activeBackgroundColor);
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const paddingHorizontal = PADDING_HORIZONTAL_MULTIPLIER * fontSize;
  const borderRadius = getBorderRadius(props.radius);
  const iconSize = props.material ? MAT_ICON_MULTIPLIER * fontSize : fontSize;
  const focusBorderColor = props.readOnly ? props.borderColor || color : props.activeBorderColor || props.theme.colors.primary
  
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    input: {
      flex: 1,
      //@ts-ignore
      outlineWidth: 0,
      //@ts-ignore
      minWidth: 'inherit',
      fontSize: fontSize,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      color: props.theme.colors.text,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: paddingVertical,
      borderColor: color,
      paddingVertical: paddingVertical,
      borderRadius: props.type === 'underlined' ? 0 : borderRadius,
      paddingHorizontal:
        props.type === 'underlined'
        ? 0
        : (props.radius === 'full' && props.material)
          ? 2 * paddingHorizontal
          : paddingHorizontal,
      ...getBorders(props.type, props.borderWidth!),
    },
    containerFocus: {
      backgroundColor: backgroundColor,
      borderColor: focusBorderColor,
    },
    containerNotFocus: {
      borderColor: props.disabled ? 'transparent' : props.borderColor || color,
      backgroundColor:
        props.disabled
          ? props.theme.colors.default
          : props.readOnly
            ? backgroundColor
            : getBackgroundColor(props.backgroundColor),
    },
    text: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
    },
    label: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
      marginBottom: 0.6 * paddingVertical,
      fontSize: props.material ? TEXT_HELPER_MULTIPLIER * fontSize : fontSize,
    },
    helpTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      marginTop: 0.25 * fontSize,
      paddingHorizontal: borderRadius,
    },
    helpText: {
      fontStyle: 'italic',
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
    txtCounter: {
      fontStyle: 'italic',
      marginLeft: 'auto',
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
    prefixSeparator: {
      borderRightWidth: 1,
      width: paddingVertical + iconSize,
      borderRightColor: props.theme.colors.border,
    },
    suffixSeparator: {
      borderLeftWidth: 1,
      width: paddingVertical + iconSize,
      borderLeftColor: props.theme.colors.border,
    }
  });
}

export const materialStyle = () => StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});

// Platform.OS === 'web' && { outlineWidth: 0 },
//         {
//             textAlignVertical: props.numberOfLines ? 'top' : 'center'
//         }