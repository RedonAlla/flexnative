import React from "react";
import { View, Text } from "react-native";
import ThemeContext from "@flexnative/theme-context";

import { CheckListProps } from "./props";
import { createStyles } from "./styles";
import FalsyComponent from "../components/falsy-component";
import { includes, isEqual, isObject } from "../input.utilities";


type StateProps<T> = {
  selectedItem?: T;
  selectedItems?: Array<T>;
}

export default class CheckList<T> extends React.PureComponent<CheckListProps<T>, StateProps<T>> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  static defaultProps = {
    size: 'default',
    type: 'default',
    radius: 'medium',
    direction: 'column',
    color: 'primary',
    borderWidth: 'hairline',
    multipleSelect: true
  }

  constructor(props: CheckListProps<T>) {
    super(props);

    this.state = {
      selectedItem: !props.multipleSelect ? props.value as T : undefined,
      selectedItems: props.multipleSelect ? props.value as Array<T> : undefined,
    }
    
    this.handleItemPress = this.handleItemPress.bind(this);
  }

  handleItemPress(pressedItem: T) {
    if(!this.props.multipleSelect) {
      this.setState({selectedItem: pressedItem});
      this.props.onValueChange?.(pressedItem);
      return;
    }

    let newSelectedItems = this.state.selectedItems;
    let index = isObject(pressedItem) ? this.getObjectIndex(pressedItem) : this.getItemIndex(pressedItem);
    
    if(index >= 0)
      newSelectedItems?.splice(index, 1);
    else
      newSelectedItems?.push(pressedItem);

    this.setState({selectedItems: newSelectedItems});
    this.props.onValueChange?.(newSelectedItems as Array<T>);
  }

  getItemIndex(pressedItem: T): number {
    let newSelectedItems = this.state.selectedItems;
    return newSelectedItems?.indexOf(pressedItem)!;
  }

  getObjectIndex(pressedItem: T): number {
    let newSelectedItems = this.state.selectedItems;
    return newSelectedItems?.findIndex(item => item[this.props.valueField as keyof T] === pressedItem[this.props.valueField! as keyof T])!;
  }

  public render() {
    const {
      type,
      color,
      radius,
      size,
      disabled,
      direction,
      borderWidth,
      borderColor,
      backgroundColor,
      material,
      helperText,
      label,
      labelStyle,
      value,
      valueField,
      multipleSelect,
      onValueChange,
      style,
      children,
      ...otherProps
    } = this.props;

    if (material && (label === null || label === undefined))
      throw new Error(`for type material Label it is required.`) ;

    const styles = createStyles(
      {
        type: type,
        color: color!,
        size: size,
        radius: radius,
        borderWidth: borderWidth,
        disabled: disabled,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        material: material,
        direction: direction,
        theme: this.context.colors
      }
    );
    
    return (
      <View style={[styles.wrapper, material ? undefined : styles.default]} {...otherProps}>
        <FalsyComponent
          shouldRender={Boolean(label && !material)}
          style={[styles.label, labelStyle]}
          component={<Text>{label}</Text>}
        />

        <View style={[styles.container, style]} >
          <FalsyComponent
            shouldRender={Boolean(label && material)}
            style={[styles.label, labelStyle]}
            component={<Text>{label}</Text>}
          />
          
          <View style={styles.listContainer}>
            {React.Children.map(children, (child, _) => {
              return React.cloneElement(child, Object.assign({}, {
                color,
                radius,
                size,
                disabled,
                direction,
                borderWidth,
                borderColor,
                backgroundColor
              },
              child.props, {
                onValueChange: () => this.handleItemPress(child.props.value as T),
                value: multipleSelect
                  ? includes(this.state.selectedItems as Array<T>, child.props.value, valueField)
                  : isEqual(child.props.value, this.state.selectedItem, valueField),
              }));
            })}
          </View>

        </View>

        {Boolean(helperText) && (
          <Text style={styles.helpText}>{helperText}</Text>
        )}
      </View>
    );
  }
}