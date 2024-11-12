/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-28 19:37:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 22:28:29
 * @ Description: Bottom Sheet styles.
 */


import { StyleSheet } from 'react-native';
import { BaseColors } from '@flexnative/theme-context';


/**
 * Generates a StyleSheet for the Bottom Sheet component.
 *
 * @param {BaseColors} colors - The color scheme to be used for styling.
 * @returns {StyleSheet.NamedStyles} The generated styles for the Bottom Sheet component.
 *
 * @property {object} wrapper - The style for the wrapper view.
 * @property {number} wrapper.flex - The flex value for the wrapper.
 * @property {string} wrapper.backgroundColor - The background color for the wrapper.
 *
 * @property {object} container - The style for the container view.
 * @property {number} container.height - The height of the container.
 * @property {string} container.width - The width of the container.
 * @property {string} container.overflow - The overflow property for the container.
 * @property {number} container.borderTopLeftRadius - The border radius for the top left corner of the container.
 * @property {number} container.borderTopRightRadius - The border radius for the top right corner of the container.
 * @property {string} container.backgroundColor - The background color for the container.
 *
 * @property {object} draggableContainer - The style for the draggable container view.
 * @property {string} draggableContainer.width - The width of the draggable container.
 * @property {number} draggableContainer.padding - The padding inside the draggable container.
 * @property {string} draggableContainer.alignItems - The alignment of items inside the draggable container.
 * @property {string} draggableContainer.backgroundColor - The background color for the draggable container.
 *
 * @property {object} draggableIcon - The style for the draggable icon.
 * @property {number} draggableIcon.width - The width of the draggable icon.
 * @property {number} draggableIcon.height - The height of the draggable icon.
 * @property {number} draggableIcon.borderRadius - The border radius of the draggable icon.
 * @property {string} draggableIcon.cursor - The cursor style for the draggable icon.
 * @property {string} draggableIcon.backgroundColor - The background color for the draggable icon.
 */
export default (colors: BaseColors) => StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.border
  },
  container: {
    height: 0,
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.card
  },
  draggableContainer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  draggableIcon: {
    width: 60,
    height: 5,
    borderRadius: 5,
    //@ts-ignore
    cursor: 'grabbing',
    backgroundColor: colors.border
  }
});