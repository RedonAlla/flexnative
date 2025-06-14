/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-01 16:21:19
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:55:39
 * @ Description: This class serves as a base for input components, handling common state and event management. It extends `React.PureComponent` and provides functionality for managing focus, text changes, and interaction with a theme context.
 */

import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import ThemeContext from '@flexnative/theme-context';
import { BaseInputProps } from '../input.props';


/**
 * Defines the structure of the component's state.
 */
type State<TState> = {
  /**
   * A boolean indicating whether the component (e.g., an input field) is currently focused.
   */
  isFocused: boolean;

  /**
   * A number that may represent the current length of the value in the component, if applicable.
   * This could be used for inputs where measuring the length is relevant, such as text inputs or text areas.
   */
  currentLength?: number;
} & TState;


/**
 * This class serves as a base for input components, handling common state and event management.
 * It extends `React.PureComponent` and provides functionality for managing focus, text changes, and interaction with a theme context.
 * 
 * @extends {React.PureComponent<BaseInputProps & TProps, State<TState>>}
 * @template TProps, TState
*/
export default class BaseInput<TProps, TState = {}> extends React.PureComponent<BaseInputProps & TProps, State<TState>> {
  static defaultProps = {
    look: 'default',
    color: 'default',
    size: 'default',
    type: 'outlined',
    radius: 'medium',
    borderWidth: 'hairline',
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  constructor(props: BaseInputProps & TProps) {
    super(props);

    this.state = {
      isFocused: false,
      currentLength: 0,
    } as State<TState>;
    
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  /**
   * Handles blur event, sets focus state, and triggers a parent's onBlur callback if not disabled.
   * @param {NativeSyntheticEvent<TextInputFocusEventData>} e 
   */
  public handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    if(!this.props.disabled)
      this.setState({ isFocused: false } as State<TState>);

    this.props.onBlur?.(e);
  }

  /**
   * Handles focus event and updates focus state. It also calls a parent's onFocus callback.
   * @param {NativeSyntheticEvent<TextInputFocusEventData>} e 
   */
  public handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if(!this.props.disabled)
      this.setState({ isFocused: true } as State<TState>);

    this.props.onFocus?.(e);
  };

  /**
   * Updates the text length state and triggers a parent's onChangeText callback.
   * @param {string} text 
   */
  public handleChangeText = (text: string) => {
    this.setState({ currentLength: text.length } as State<TState>);

    this.props.onChangeText?.(text);
  };

  public getTheme = () => this.context.state;
}