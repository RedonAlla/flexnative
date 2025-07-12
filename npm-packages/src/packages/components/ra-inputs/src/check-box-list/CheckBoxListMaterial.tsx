/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-06-14 22:42:29
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 23:37:19
 * @ Description: Defines the `CheckBoxListMaterial` component, a Material Design styled variant of the checkbox list.
 */

import React from "react";
import { View } from "react-native";

import InputWrapper from "../shared/components/InputWrapper";
import Label from "../shared/components/Label";
import { createMaterialStyles } from "../shared/input.styles";
import baseStyes from "./CheckBoxList.styles";
import BaseCheckBoxList from "./BaseCheckBoxList";
import CheckBox from "../check-box";


/**
 * Represents a Material Design style implementation of a CheckBoxList.
 * It extends `BaseCheckBoxList` to provide a specific Material look and feel,
 * typically involving distinct label placement and input styling.
 * This component requires a `label` prop.
 *
 * @template T The type of the value for each checkbox item.
 */

export default class CheckBoxListMaterial<T> extends BaseCheckBoxList<T> {
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
    const styles = createMaterialStyles({
      type: type!,
      color: this.props.color,
      size: this.props.size!,
      radius: this.props.radius!,
      borderWidth: this.props.borderWidth,
      disabled: disabled || false,
      borderColor: this.props.borderColor,
      backgroundColor: this.props.backgroundColor
    }, theme);

    const basStyle = baseStyes(styles.wrapper.gap * 2.5);
    
    return (
      <InputWrapper
        helperText={helperText}
        style={styles.helpText}
        disabled={disabled}
      >

        <View style={[
            styles.wrapper,
            direction === 'column' ? basStyle.column : basStyle.row,
            type === 'underlined' && styles.underlined,
            style
          ]}>

          <Label label={label} style={styles.label} labelStyle={labelStyle} />

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
      </InputWrapper>
    );
  }
}