/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-11 19:35:17
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 23:35:34
 * @ Description: The file defines a React Native component, `CheckBoxListDefault<T>`, which represents the default visual and behavioral implementation for a list of checkboxes.
 */

import React from "react";
import { View } from "react-native";

import InputWrapper from "../shared/components/InputWrapper";
import Label from "../shared/components/Label";
import { createDefaultStyles } from "../shared/input.styles";
import baseStyes from "./CheckBoxList.styles";
import BaseCheckBoxList from "./BaseCheckBoxList";
import CheckBox from "../check-box";


/**
 * Represents the default style implementation of a CheckBoxList.
 * It extends the `BaseCheckBoxList` to provide a default look and feel.
 * This component renders a list of checkboxes based on the provided `options` or `children`.
 *
 * @template T The type of the value for each checkbox item.
 */
export default class CheckBoxListDefault<T> extends BaseCheckBoxList<T> {
  public render() {
    const {
      type,
      disabled,
      label,
      labelStyle,
      helperText,
      children,
      direction,
      style,
      value,
      multipleSelect,
      options,
      ...restProps
    } = this.props;
    
    const theme = this.getTheme();
    const styles = createDefaultStyles({
      type: type!,
      color: this.props.color,
      size: this.props.size!,
      radius: this.props.radius!,
      borderWidth: this.props.borderWidth,
      disabled: disabled || false,
      borderColor: this.props.borderColor,
      backgroundColor: this.props.backgroundColor
    }, theme);

    const basStyle = baseStyes(styles.container.gap * 2.5);
    
    return (
      <InputWrapper
        helperText={helperText}
        style={styles.helpText}
        disabled={disabled}
      >
        <Label label={label} style={styles.label} labelStyle={labelStyle} />

        <View style={[
            styles.container,
            direction === 'column' ? basStyle.column : basStyle.row,
            type === 'underlined' && styles.underlined,
            style
          ]}>

          { options?.map((option, index) => (
            <CheckBox
              key={index}
              label={this.generateLabel(option, index)}
              onValueChange={() => this.handleItemPress(option)}
              value={!!this.getCurrentValue(option as T)}
              {...restProps}
            />
          ))}
        
          {children && React.Children.map(children, (child, _) => {
            return React.cloneElement(child!, Object.assign({}, {
              ...restProps
            },
            child!.props, {
              onValueChange: () => this.handleItemPress(child.props.value as T),
              value: this.getCurrentValue(child.props.value as T)
            }));
          })}

        </View>
      </InputWrapper>
    );
  }
}