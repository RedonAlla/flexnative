/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-28 19:37:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:59:52
 * @ Description: Bottom Sheet styles.
 */

import { StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';


export default (colors: BaseTheme) => StyleSheet.create({
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