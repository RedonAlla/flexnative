/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Entry point for the CheckBoxList component, dynamically rendering different list styles.
 */

import React from "react";
import CheckBoxListDefault from "./CheckBoxListDefault";
import CheckBoxListMaterial from "./CheckBoxListMaterial";
import CheckBoxListInline from "./CheckBoxListInline";
import { CheckListProps } from "./props";


const COMPONENTS = {
  default: CheckBoxListDefault,
  material: CheckBoxListMaterial,
  inline: CheckBoxListInline,
}

/**
 * A versatile CheckBoxList component that dynamically renders different visual styles
 * based on the `look` prop. It acts as a factory, selecting the appropriate
 * CheckBoxList implementation (Default, Material, or Inline).
 *
 * @template T The type of the value for each checkbox item.
 * @param {CheckListProps<T>} props - The properties for the CheckBoxList.
 * @returns {React.ReactElement} A CheckBoxList component styled according to the `look` prop.
 *                               Defaults to `CheckBoxListDefault` if `look` is not specified or invalid.
 */
const CheckBoxList = <T extends unknown>(props: CheckListProps<T>) => {
  const Component = COMPONENTS[props.look || 'default'] || CheckBoxListDefault;
  return <Component {...props} />;
};

export default CheckBoxList;