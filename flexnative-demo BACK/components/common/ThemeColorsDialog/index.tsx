/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 22:36:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 19:46:00
 * @ Description: This component allows users to select a theme color, updating the theme's primary color using context. It leverages React's context API for theme management and ensures optimal performance with `React.PureComponent`. Additionally, it supports asynchronous actions when theme changes occur, enhancing user interaction through a responsive bottom sheet interface.
 */

import React from 'react';
import { ScrollView, View } from 'react-native';
import BottomSheet from '@flexnative/bottom-sheet';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';
import { DialogProps } from './ThemeColorsDialog.props';
import { IPrimaryColors, primaryColors } from '@/constants/colors';
import { styles } from './ThemeColorsDialog.styles';
import ColorItem from './ThemeColorsDialog.Item';
import { BOTTOM_SHEET_HEIGH } from './ThemeColorsDialog.constants';


/**
 * Map `themeColors` in to an array of objects where each object represents a theme color, consisting of a key and its corresponding value from the primaryColors object.
 */
const themeColors = Object.keys(primaryColors).map((key) => ({
  key: key as keyof IPrimaryColors,
  value: primaryColors[key as keyof IPrimaryColors]
}));

/**
 * This component allows users to select a theme color, updating the theme's primary color using context.
 * It leverages React's context API for theme management and ensures optimal performance with `React.PureComponent`.
 * Additionally, it supports asynchronous actions when theme changes occur, enhancing user interaction through a responsive bottom sheet interface.
 */
export default class extends React.PureComponent<DialogProps> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  onChangePrimaryColor = async (color: keyof IPrimaryColors): Promise<void>  => {
    if(this.props.onChangeColorTheme)
      this.props.onChangeColorTheme();
    
    await this.context.setTheme!({
      ...defaultTheme(),
      colors: {
        ...this.context.colors,
        primary: primaryColors[color]
      }
    });
  }

  public render() {
    return (
      <BottomSheet
        ref={this.props.bottomSheetRef}
        height={BOTTOM_SHEET_HEIGH}
        closeOnDragDown={true}
      >
        <ScrollView contentContainerStyle={styles.wrapper}>
          {themeColors.map((item, index) => (
            <ColorItem key={index}
                      item={item}
                      overlay={this.context.colors.overlay}
                      isSelected={this.props.currentTheme === item.value}
                      onSelect={() => this.onChangePrimaryColor(item.key)}/>
          ))}
        </ScrollView>
      </BottomSheet>
    );
  }
}