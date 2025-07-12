/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: React component that allows users to select items from a list.
 * It supports both single and multiple selection modes based on the 'multipleSelect' prop.
 * The component maintains its selected items in the state and updates the selection when an item is pressed.
 * It also provides styling options through various props and handles rendering of labels and helper text conditionally.
 */

import React from "react";
import ThemeContext from "@flexnative/theme-context";

import { CheckListProps } from "./props";
import { includes, isObject, isEqual } from "../shared/input.utilities";


/**
 * This defines a generic type alias StateProps that takes a type parameter T.
 * This allows us to create flexible and reusable types.
 */
type StateProps<T> = {
  /**
   * An optional property `selectedItem` of type `T`
   */
  selectedItem?: T;

  /**
   * An optional property `selectedItems` which is an array of items of type `T`
   */
  selectedItems?: Array<T>;
}

/**
 * React component that allows users to select items from a list.
 * It supports both single and multiple selection modes based on the 'multipleSelect' prop.
 * The component maintains its selected items in the state and updates the selection when an item is pressed.
 * It also provides styling options through various props and handles rendering of labels and helper text conditionally.
 * 
 * @class CheckList<T>
 * @extends {React.Component<CheckListProps<T>, StateProps<T>>}
 */
export default class BaseCheckBoxList<T> extends React.Component<CheckListProps<T>, StateProps<T>> {
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

    console.log('Selected Items: ', newSelectedItems);
  }

  getItemIndex = (pressedItem: T): number =>
    this.state.selectedItems?.indexOf(pressedItem)!;

  getObjectIndex = (pressedItem: T): number =>
    this.state.selectedItems?.findIndex(item => item[this.props.valueField as keyof T] === pressedItem[this.props.valueField! as keyof T])!;

  public getCurrentValue = (elementValue: T) => this.props.multipleSelect
    ? includes(this.state.selectedItems as Array<T>, elementValue, this.props.valueField)
    : isEqual(elementValue, this.state.selectedItem, this.props.valueField);

  public getTheme = () => this.context.state;

  public getLabel = (value: T) => isObject(value)
    ? value![this.props.textField as keyof T]
    : value;

  /**
   * Generates a unique key for a list item.
   * Uses the `keyExtractor` prop if provided.
   * Otherwise, attempts to use 'id', 'key', or the `valueField` of the item.
   * Falls back to the item's index as a last resort.
   * @param item - The item from the list.
   * @param index - The index of the item in the list.
   * @returns A unique string key for the item.
   */
  protected generateLabel = (item: T, index: number): string => {
    const { textField } = this.props;

    if (isObject(item)) {
      const objItem = item as any;

      if (textField && objItem[textField as string] !== undefined && objItem[textField as string] !== null) {
        return String(objItem[textField as string]);
      }

      if (objItem.id !== undefined && objItem.id !== null) {
        return String(objItem.id);
      }
    }

    return String(index); // Fallback
  }
}