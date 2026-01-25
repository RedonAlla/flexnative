/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 23:18:39
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 20:02:48
 * @ Description: This component is designed to be part of a list or grid where users can select colors. When an item is pressed, it shows an overlay, and if it's selected, a checkmark appears.
 */

import { Pressable, View, StyleSheet } from "react-native";
import Icon from "@flexnative/icons";
import { itemStyles } from "./ThemeColorsDialog.styles";
import { ColorItemProps } from "./ThemeColorsDialog.props";
import { ICON_SIZE } from "./ThemeColorsDialog.constants";


/**
 * This component is designed to be part of a list or grid where users can select colors.
 * When an item is pressed, it shows an overlay, and if it's selected, a checkmark appears.
 * 
 * @param {ColorItemProps} param
 * @returns This is a functional component named ColorItem that receives props defined in ColorItemProps.
 */
export default function ColorItem({ isSelected, item, onSelect, overlay }: ColorItemProps) {  
  const containerStyle = [
    itemStyles.container,
    { borderColor: isSelected ? item.value : 'transparent', zIndex: 10 }
  ];

  const overlayStyle = [StyleSheet.absoluteFillObject, { backgroundColor: overlay, zIndex: -1, }];

  const itemColorStyle = [itemStyles.itemColor, { backgroundColor: item.value }];
  
  return (
    <Pressable
      role='radio'
      style={containerStyle}
      onPressIn={() => onSelect(item.key)}
    >
      {({ pressed }) => (
        <>
          <View style={itemColorStyle}>
            { pressed && <View style={overlayStyle} /> }

            { isSelected && <Icon size={ICON_SIZE} name='check' color='white' /> }
          </View>
        </>
      )}
    </Pressable>
  );
}