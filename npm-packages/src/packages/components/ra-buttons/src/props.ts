/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-18 00:08:01
 * @ Description: This module defines the types and interfaces for the properties of the `Button` component.
 *                It specifies the structure and constraints for customizing the appearance and behavior of the button.
 */

import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { ColorValue, PressableProps, StyleProp, TextStyle } from "react-native";


/**
 * Represents the different types of buttons available in the application.
 * 
 * - `default`: Standard button style.
 * - `ghost`: Button with a transparent background.
 * - `inverse`: Button with inverted colors.
 * - `link`: Button styled as a hyperlink.
 * - `text`: Button with no background or border, just text.
 */
export type ButtonType = 'default' | 'ghost' | 'inverse' | 'link' | 'text';

/**
 * Interface representing the properties for a base button component.
 */
export interface BaseButtonProps {
  /**
   * Button border radius.
   * 
   * @type {BorderRadius}
   * @default 'medium'
   * @see {@link BorderRadius}
   * @example
   * ```jsx
   * <Button radius="small" />
   * <Button radius="large" />
   * ```
   */
  radius: BorderRadius;

  /**
   * Optional button borders width.
   * @type {BorderWidth}
   * @default 'hairline'
   * @see {@link BorderWidth}
   * @example
   * ```jsx
   * <Button borderWidth="none" />
   * <Button borderWidth="thin" />
   * ```
   */
  borderWidth?: BorderWidth;

  /**
   * If true, the button is in a disabled state and shows a spinner while in a loading state.
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Button loading={true} />
   * <Button loading={false} />
   * ```
   */
  loading?: boolean;

  /**
   * Button type.
   * 
   * For type `ghost` and `text` to have pressed effect with custom colors please use property `activeColor`.
   * @default 'default'@type {ButtonType}
   * @see {@link ButtonType}
   * @example
   * ```jsx
   * <Button type="ghost" />
   * <Button type="text" />
   * <Button type="default" />
   * ```
   */
  type: ButtonType;

  /**
   * Button Sizes.
   * 
   * - `small`: A small size.
   * - `medium`: A medium size.
   * - `large`: A large size.
   * - `number`: A custom numeric size.
   * @default 'normal'
   * @type {Sizes}
   * @see {@link Sizes}
   * @example
   * ```jsx
   * <Button size="small" />
   * <Button size={12} />
   * ```
   */
  size: Sizes;

  /**
   * Color by theme or a custom color according to `react-native` ColorValue.
   * For custom Color with type `ghost` and `text` please use property `activeColor` to have the press effect.
   * @default 'default'
   * @type {Color}
   * @see {@link Color}
   * @example
   * ```jsx
   * <Button color="primary" />
   * <Button color="red" />
   * ```
   */
  color: Color;

  /**
   * Button color on active state, according to `react-native` ColorValue.
   * @type {ColorValue}
   * @example
   * ```jsx
   * <Button activeColor="blue" />
   * <Button activeColor="#0000FF" />
   * ```
   */
  activeColor?: ColorValue;

  /**
   * Borders color according to `react-native` ColorValue.
   * 
   * @type {ColorValue}
   * @example
   * ```jsx
   * <Button borderColor="gray" />
   * <Button borderColor="rgba(0, 0, 0, 0.5)" />
   * ```
   */
  borderColor?: ColorValue;

  /**
   * Border color for active state according to `react-native` ColorValue.
   * @type {ColorValue}
   * @example
   * ```jsx
   * <Button activeBorderColor="black" />
   * <Button activeBorderColor="#000" />
   * ```
   */
  activeBorderColor?: ColorValue;

  /**
   * Create responsive stacks of full-width, `buttons`.
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Button block={true} />
   * <Button block={false} />
   * ```
   */
  block?: boolean;

  /**
   * Adds a shadow effect to the button, when the button it is pressed.
   * For more details read the {@link https://reactnative.dev/docs/view-style-props#boxshadow documentation}.
   * @type {string}
   * @example
   * ```jsx
   * <Button pressedBoxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" />
   * ```
   */
  pressedBoxShadow?: string;
}

/**
 * Interface representing the properties for a Button component, including text and icon-specific properties.
 * @extends BaseButtonProps
 * @extends PressableProps
 */
export interface IButtonProps extends BaseButtonProps, PressableProps {
  /**
   * Children to display inside the button
   * @type {React.ReactNode}
   * @example
   * ```jsx
   * <Button>
   *   <Text>Click Me</Text>
   * </Button>
   * ```
  */
  children?: React.ReactNode;

  /**
   * Custom element to render as a loading indicator component.
   * @type {React.ReactElement}
   * @example
   * ```jsx
   * <Button renderLoading={<ActivityIndicator color="white" />} />
   * ```
   */
  renderLoading?: React.ReactElement;

  /**
   * Text string for button or custom element properties.
   * If children is set, the `text` property will be ignored.
   * @type {string}
   * @example
   * ```jsx
   * <Button text="Click Here" />
   * ```
   */
  text?: string;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the button is pressed and returns text styles.
   * @type {StyleProp<TextStyle> | ((pressed: boolean) => StyleProp<TextStyle>)}
   * @example
   * ```jsx
   * <Button text="Click" textStyle={{ fontWeight: 'bold' }} />
   * <Button text="Click" textStyle={(pressed) => ({ color: pressed ? 'blue' : 'black' })} />
   * ```
   */
  textStyle?:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined;
  
  /**
   * If true, the icon it is displayed on right size of text.
   * @type {boolean}
   * @example
   * ```jsx
   * <Button text="Next" icon="arrow-right" iconRight />
   * <Button text="Next" icon="arrow-right" iconRight={true} />
   * <Button text="Back" icon="arrow-left" iconRight={false} />
   * ```
   */
  iconRight?: boolean;

  /**
   * Optional icon to display in the button component.
   * If children is set, the `icon` property will be ignored.
   * @type {keyof IconName | React.ReactElement}
   * @see {@link IconName}
   * @example
   * ```jsx
   * <Button icon="check" text="Done"/>
   * <Button icon={<MyCustomIcon />} text="Custom"/>
   * ```
   */
  icon?: keyof IconName | React.ReactElement;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the button is pressed and returns text styles.
   * @type {StyleProp<TextStyle> | ((pressed: boolean) => StyleProp<TextStyle>)}
   * @example
   * ```jsx
   * <Button icon="check" text="Done" iconStyle={{ width: 24, height: 24 }} />
   * <Button icon="check" text="Done" iconStyle={(pressed) => ({ tintColor: pressed ? 'red' : 'green' })} />
   * ```
   */
  iconStyle?:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined;
}