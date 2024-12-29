/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 22:57:32
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 23:39:58
 * @ Description: Screen with icons list displayed in a grid format.
 */


import React from "react";
import { ColorValue, ListRenderItem, Platform, View, Text, StyleSheet, FlatList } from "react-native";
import Icon, { IconName, icons } from "@flexnative/icons";
import ThemeContext from "@flexnative/theme-context";
import { formatData } from "@flexnative/utilities";
import { BOTTOM_TAB_HEIGHT, HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";


/**
 * This type defines the properties for an icon item.
 */
type IconItemProps = {
  /**
   * An optional property that can be a key of IconName or an empty string.
   */
  icon?: keyof IconName | '',

  /**
   * The icon color of type ColorValue.
   */
  color: ColorValue;

  /**
   * The Color item background.
   */
  backgroundColor: ColorValue;
}

/**
 * Represents the size of the icons.
 */
const ICON_SIZE = 32;

/**
 * Determines how many columns to display in a grid.
 * It's 5 for web platforms and 2 for others, allowing responsive design.
*/
const COLUMN_NUMBER = Platform.OS === 'web' ? 5 : 2;


/**
 * Default export of the IconList class extending `React.PureComponent` for optimized rendering.
 * Returning a FlatList to display the icon items in a grid format
 * 
 * @returns {FlatList} - FlatList to display the icon items in a grid format.
 */
export default class IconList extends React.PureComponent {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const { colors: { text, card } } = this.context;

    const data: IconItemProps[] = Object.keys(icons).map(icon => ({
      icon: icon!,
      color: text,
      backgroundColor: card
    })) as IconItemProps[];

    return (
      <FlatList contentContainerStyle={styles.contentStyle}
                data={formatData(data, COLUMN_NUMBER, '' as any)}
                numColumns={COLUMN_NUMBER}
                renderItem={IconItem}
                keyExtractor={(_, index) => index.toString()}/>
    )
  }
}


/**
 * Functional component for rendering individual icon items.
 * @param param 
 * @returns Returns a view containing the icon and its label.
 */
const IconItem: ListRenderItem<IconItemProps> = ({ item }) => {
  const { icon = '', backgroundColor, color } = item || {};

  if(!icon)
    return <View style={[styles.emptyItem]} />

  return (
    <View style={[styles.itemContent, { backgroundColor }]}>
      <Icon name={icon! as keyof IconName} size={ICON_SIZE} color={color}/>
      <Text style={[styles.text, { color }]}>{icon}</Text>
    </View>
  );
}

/**
 * Stylesheet defining styles for Icons list components used in the rendering.
 */
const styles = StyleSheet.create({
  contentStyle: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingBottom: BOTTOM_TAB_HEIGHT,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: 'transparent',
    maxWidth: MAX_WIDTH,
  },
  itemContent: {
    margin: 6,
    padding: 16,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyItem: {
    flex: 1,
    margin: 8,
    backgroundColor: 'transparent',
  },
  text: {
    paddingTop: 13,
    fontFamily: 'Italic',
    fontSize: 13
  }
});