/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-12 22:44:41
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 22:40:18
 * @ Description: The provided TypeScript React Native code defines a responsive grid display of UI components, each represented by an icon and a title. The grid layout adjusts based on the platform (web or mobile) using a predefined number of columns. This code utilizes animations to enhance user interaction by zooming icons when pressed.
 */

import React from 'react';
import { Animated, Text, FlatList, ListRenderItem, Platform, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { IconName, icons } from '@flexnative/icons';
import { useThemeContext } from '@flexnative/theme-context';

import componentsList from './Home.components.list';
import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';


/**
 * Defines the size of the icon, which will be used in the styling of the list items.
const ICON_SIZE = 42;
 */
const ICON_SIZE = 42;

/**
 * Sets the duration of animations in milliseconds. This affects how long the zoom effect takes.
 */
const ANIMATION_DURATION = 300;

/**
 * Determines the number of columns for the grid layout based on the platform.
 * For web, it uses 4 columns, and for other platforms, it defaults to 2 columns.
 */
const COLUMN_NUMBER = Platform.OS === 'web' ? 4 : 2;

/**
 * Interface definition for the properties of an Item component.
 */
interface ItemProps {
  /**
   * The URL that the item links to, represented as a string.
   */
  href: string;

  /**
   * The title or name of the item, used for display purposes.
   */
  title: string;

  /**
   * The name or key of the icon associated with this item.
   * This is a specific key from the IconName type or enum.
   */
  icon: keyof IconName;
}

/**
 * Function that returns animation configuration settings.
 * 
 * @param {number} toValue - The target value for the animation, determining the final state.
 * @returns animation configuration settings.
 */
const animation = (toValue: number) => ({
  toValue: toValue,
  duration: ANIMATION_DURATION,
  useNativeDriver: false
});

/**
 * Display a grid links to navigate to a specific component screen.
 */
export default class extends React.PureComponent {
  public render() {
    return (
      <FlatList contentContainerStyle={styles.container}
                data={componentsList}
                numColumns={COLUMN_NUMBER}
                renderItem={(item) => <ListItem {...item} />}
                keyExtractor={(item, index) => index.toString()}/>
    )
  }
}


/**
 * Component to render an individual list item, typed with `ListRenderItem<ItemProps>`.
 * This component utilizes animations to enhance user interaction by zooming icons when pressed.
 * 
 * @param {ItemProps} param
 * @returns {ListRenderItem<ItemProps>} - Component to render an individual list item, typed with `ListRenderItem<ItemProps>`.
 */
const ListItem: ListRenderItem<ItemProps> = ({ item }) => {
  const zoomAnim = React.useRef(new Animated.Value(1)).current;
  const theme = useThemeContext();

  const zoomIn = (): void => 
    Animated.timing(zoomAnim, animation(1.3)).start();

  const zoomOut = (): void =>
    Animated.timing(zoomAnim, animation(1)).start();

  return (
    <Link href={item.href} asChild  style={[styles.linkContainer, {backgroundColor: theme.colors.card}]}>
      <Pressable onPressIn={zoomIn} onPressOut={zoomOut} >
        <Animated.Text style={[styles.icon, { color: theme?.colors?.text }, { transform: [{scale: zoomAnim}] }]}>
          {icons[item.icon]}
        </Animated.Text>
        <Text style={[styles.title, { color: theme?.colors?.text }]}>
          {item.title}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: 'transparent',
    paddingTop: HEADER_HEIGHT,
    marginHorizontal: "auto"
  },
  linkContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: ICON_SIZE,
    fontFamily: 'Icons'
  },
  title: {
    paddingTop: 6,
    fontFamily: 'Italic',
    fontSize: 13
  }
});