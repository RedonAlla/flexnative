import { ColorValue, StyleSheet } from "react-native";
import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

import { InputType } from "./input.props";
import { getBorders } from "./input.utilities";

import {
  ICON_MULTIPLIER,
  ICON_SEPARATOR_WIDTH,
  MAT_ICON_MULTIPLIER,
  PADDING_HORIZONTAL_MULTIPLIER,
  PADDING_VERTICAL_MULTIPLIER,
  TEXT_HELPER_MARGIN_TOP_MULTIPLIER,
  TEXT_HELPER_MULTIPLIER
} from "./input.constants";


type ContainerProps = {
  type: InputType;
  color: Color;
  size: Sizes;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  readOnly?: boolean;
  readonly?: boolean;
  borderColor?: ColorValue;
  activeBorderColor?: ColorValue;
  backgroundColor?: ColorValue;
  activeBackgroundColor?: ColorValue;
  material?: boolean;
  theme: BaseTheme<any>;
}

export function createStyles(props: ContainerProps) {
  const fontSize = props.theme.fontSize[props.size] ?? props.theme.fontSize.default;
  const themeColor = props.theme.colors[props.color] ?? props.color;
  const backgroundColor = props.backgroundColor ?? 'transparent';
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const paddingHorizontal = PADDING_HORIZONTAL_MULTIPLIER * fontSize;
  const borderRadius = props.theme.borderRadius[props.radius] ?? props.radius;

  const iconSize =
    props.material
      ? fontSize * MAT_ICON_MULTIPLIER
      : fontSize * ICON_MULTIPLIER;

  const focusBorderColor = props.readOnly
    ? props.borderColor ?? themeColor
    : props.activeBorderColor ?? props.theme.colors.primary;
  
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
      outlineWidth: 0,
      //@ts-ignore
      minWidth: 'inherit',
      outlineStyle: "none",
      fontSize: fontSize,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      color: props.theme.colors.text,
      alignVertical: 'center'
    },
    icon: {
      width: iconSize,
      height: '100%',
      fontSize: iconSize,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: paddingVertical,
      borderColor: props.borderColor || themeColor,
      paddingVertical: paddingVertical,
      borderRadius: props.type === 'underlined' ? 0 : borderRadius,
      paddingHorizontal: props.type === 'underlined'
        ? 0
        : (props.radius === 'full' && props.material)
          ? 2 * paddingHorizontal
          : paddingHorizontal,
      ...getBorders(props.type, props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth),
    },
    containerFocus: {
      backgroundColor: props.activeBackgroundColor ?? backgroundColor,
      borderColor: focusBorderColor,
    },
    containerNotFocus: {
      borderColor: props.disabled ? 'transparent' : props.borderColor || themeColor,
      backgroundColor:
        props.disabled
          ? props.theme.colors.default
          : backgroundColor
    },
    text: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
    },
    label: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
      marginBottom: TEXT_HELPER_MARGIN_TOP_MULTIPLIER * paddingVertical,
      fontSize: props.material ? TEXT_HELPER_MULTIPLIER * fontSize : fontSize,
    },
    helpTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      marginTop: TEXT_HELPER_MARGIN_TOP_MULTIPLIER * fontSize,
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
      textAlign: 'left',
      width: paddingVertical + iconSize,
      borderRightWidth: ICON_SEPARATOR_WIDTH,
      borderRightColor: props.theme.colors.border,
    },
    suffixSeparator: {
      textAlign: 'right',
      width: paddingVertical + iconSize,
      borderLeftWidth: ICON_SEPARATOR_WIDTH,
      borderLeftColor: props.theme.colors.border,
    }
  });
}

export function materialStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
  });
};