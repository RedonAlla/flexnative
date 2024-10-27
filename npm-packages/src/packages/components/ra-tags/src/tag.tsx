/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 21:29:40
 * @ Description: Tag component.
 */

import React from "react";
import { Pressable, Text, View } from "react-native";

import Icon from "@flexnative/icons";
import ThemeContext from "@flexnative/theme-context";

import TagProps from "./props";
import createStyles from './styles';
import { DELETE_COLOR, DELETE_COLOR_ACTIVE } from "./constants";


export default class extends React.PureComponent<TagProps, {}> {
  static defaultProps = {
    theme: 'default',
    radius: 'medium',
    size: 'default',
    type: 'default',
    color: 'default',
    borderWidth: 'none'
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const {
      text,
      type,
      size,
      color,
      textColor,
      backgroundColor,
      radius,
      borderWidth,
      borderColor,
      style,
      children,
      onDelete,
      textProps: { style: textStyles, ...restText } = {},
      ...resProps
    } = this.props;

    const styles = createStyles({
      type: type!,
      color: color,
      size: size!,
      radius: radius,
      textColor: textColor,
      borderWidth: borderWidth,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      theme: {
        colors: this.context.colors,
        isLight: this.context.colorScheme === 'light'
      }
    });
    
    return (
      <View style={[styles.container, style]} {...resProps}>
        {
          children ? children :
          <>
            <Text style={[styles.text, textStyles]} {...restText}>{text}</Text>
            { onDelete &&
              <Pressable onPress={onDelete}
                style={({pressed}) => [
                  { backgroundColor: pressed ? DELETE_COLOR_ACTIVE : DELETE_COLOR },
                  styles.deleteButton,
                ]}>
                <Icon name='close-circle' style={styles.delete} />
              </Pressable>
            }
          </>
        }
      </View>
    );
  }
}