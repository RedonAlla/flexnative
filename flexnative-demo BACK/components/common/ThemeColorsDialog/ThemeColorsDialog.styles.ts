/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 22:59:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 20:19:36
 * @ Description: This code structures style definitions for two components: a general wrapper and specific item containers, aiming for a responsive, well-aligned, and aesthetically pleasing layout in a React Native application. It utilizes constants (ITEM_MARGIN, ITEM_SIZE, etc.) which provide flexibility and maintainability by defining styles dynamically based on these variables.
 */

import { StyleSheet } from 'react-native';
import {
  ITEM_BORDER_PADDING,
  ITEM_BORDER_RADIUS,
  ITEM_BORDER_WIDTH,
  ITEM_CONTAINER_RADIUS,
  ITEM_MARGIN,
  ITEM_SIZE
} from './ThemeColorsDialog.constants';


/**
 * Styles for items within a container using StyleSheet in React Native.
 */
export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    margin: 'auto',
    flexWrap: 'wrap',
    rowGap: 5,
    flexDirection: 'row'
  }
});


/**
 * Styles for a wrapper component using StyleSheet in React Native.
 */
export const itemStyles = StyleSheet.create({
  container: {
    margin: ITEM_MARGIN,
    padding: ITEM_BORDER_PADDING,
    borderRadius: ITEM_CONTAINER_RADIUS,
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: ITEM_BORDER_WIDTH,
    backgroundColor: 'transparent'
  },
  itemColor: {
    width: '100%',
    height: '100%',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ITEM_BORDER_RADIUS,
  }
});