/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-10 19:22:37
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:12:06
 * @ Description: The file defines the base class `BaseNumericTextBox` for a numeric input component in a React Native application.
 *                `BaseNumericTextBox` provides the foundational logic for a numeric input field, handling user input, validation (basic number check), and increment/decrement functionality.
 *                However, it needs the `onChangeText` callback to be fully functional within a larger application context.
 */

import BaseInput from "../shared/components/BaseInput";
import { NumberTextBoxProps } from "./NumericTextBox.props";

/**
 * Define a type 'State' representing the state structure for a component or application.
 */
type State = {
  
  /**
   * A string containing the current value, likely representing input data or content.
   */
  value: string;
}

/**
 * Base class for NumericTextBox components, handling common logic and state management.
 *
 * @extends {BaseInput<NumberTextBoxProps, State>}
 */
export default class BaseNumericTextBox extends BaseInput<NumberTextBoxProps, State> {
  static defaultProps = {
    look: 'default',
    color: 'default',
    size: 'default',
    type: 'outlined',
    radius: 'medium',
    borderWidth: 'hairline',
    actions: true,
    step: 1
  }

  constructor(props: NumberTextBoxProps) {
    super(props);

    this.state = {
      isFocused: false,
      currentLength: 0,
      value: ''
    }
  }

  handleChangeText = (text: string) => {
    if(!isNaN(+text)) {
      this.setState({
        value: text,
        currentLength: text.length
      });
    }
  };

  public handleIncrement = () => {
    const value = +this.state.value! + this.props.step!;
    this.setState({value: value.toString()});
  };

  public handleDecrement = () => {
    const value = +this.state.value! - this.props.step!;
    this.setState({value: value.toString()});
  };
}
