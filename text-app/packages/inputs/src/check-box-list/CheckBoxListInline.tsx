/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-06-14 23:09:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 23:36:28
 * @ Description: Defines the `CheckBoxListInline` component, an inline styled variant of the checkbox list.
 */


import React from "react";
import { View } from "react-native";

import InputWrapper from "../shared/components/InputWrapper";
import Label from "../shared/components/Label";
import { createInlineStyles } from "../shared/input.styles";
import baseStyes from "./CheckBoxList.styles";
import BaseCheckBoxList from "./BaseCheckBoxList";
import CheckBox from "../check-box";


/**
 * Represents an inline style implementation of a CheckBoxList.
 * It extends `BaseCheckBoxList` to provide a specific inline layout where the label
 * and the checkbox items are typically rendered on the same line.
 * This component requires a `label` prop.
 *
 * @template T The type of the value for each checkbox item.
 */
export default class CheckBoxListInline<T> extends BaseCheckBoxList<T> {
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

     if (label === null || label === undefined)
      throw new Error(`for type material Label it is required.`);
    
    const theme = this.getTheme();
    const styles = createInlineStyles({
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

        <View style={[
            styles.container,
            { gap: styles.container.gap * 2.5 },
            type === 'underlined' && styles.underlined,
            direction === 'column' ? { alignItems: 'flex-start' } : undefined,
            style
          ]}>

          <Label label={label} style={styles.label} labelStyle={labelStyle} />

          <View style={[
            direction === 'column' ? basStyle.column : basStyle.row,
            direction === 'column' ? { gap: styles.container.gap } : undefined
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
              return React.cloneElement(child, Object.assign({}, {
                ...restProps
              },
              child.props, {
                onValueChange: () => this.handleItemPress(child.props.value as T),
                value: this.getCurrentValue(child.props.value as T)
              }));
            })}
          </View>

        </View>
      </InputWrapper>
    );
  }
}