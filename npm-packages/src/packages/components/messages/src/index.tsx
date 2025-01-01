import React from "react";
import { Text, View } from "react-native";
import { MessageBoxProps } from "./props";
import ThemeContext from "@flexnative/theme-context";
import createStyles from "./styles";


/**
 * Represents a message box component.
 * 
 * The message box component is used to display messages to the user.
 * 
 * @extends React.PureComponent
 */
export default class Message extends React.PureComponent<MessageBoxProps> {
  /**
   * Default properties for the message box component.
   * 
   * @property {string} radius - The border radius of the message box. Default is 'medium'.
   * @property {boolean} loading - Indicates if the message box is in a loading state. Default is false.
   * @property {string} size - The size of the message box. Default is 'default'.
   * @property {string} color - The color of the message box. Default is 'default'.
   * @property {string} type - The type of the message box. Default is 'default'.
   * @property {string} borderWidth - The width of the message box's border. Default is 'hairline'.
   */
  static defaultProps = {
    radius: 'medium',
    borderWidth: 'none',
    fill: 'ghost',
    size: 'default',
    color: 'default',
  }

  /**
   * Specifies the context type for the component.
   * This allows the component to subscribe to the nearest 
   * ThemeContext provider and access its value.
   */
  
  static contextType = ThemeContext;

  /**
   * Declares a context variable of the type inferred from the ThemeContext.
   * This context is used to access the current theme settings within the component.
   */
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const { radius, borderWidth, fill, size, color, borderColor, children, text, style, ...rest } = this.props;
    const styles = createStyles({
        radius,
        borderWidth,
        fill,
        size,
        color,
        borderColor
    }, this.context);
        
    return (
      <View style={[styles.container, style]} {...rest}>
        {
          Boolean(children) 
            ? children
            : <Text style={styles.text}>{text}</Text>
        }
      </View>
    );
  }
}