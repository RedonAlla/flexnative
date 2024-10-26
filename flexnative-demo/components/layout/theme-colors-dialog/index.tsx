import React from 'react';
import { View, StyleSheet } from 'react-native';

import BottomSheet from '@flexnative/bottom-sheet';
import ThemeContext from '@flexnative/theme-context';

import { IPrimaryColors, primaryColors } from '@/constants/colors';
import ColorItem from './color-item';


const BOTTOM_SHEET_HEIGH = 420;

interface Props {
  currentTheme: keyof IPrimaryColors;
  onChangeColorTheme?: () => void;
  bottomSheetRef: React.RefObject<BottomSheet>
}

const themeColors = Object.keys(primaryColors).map((key) => ({
  key: key as keyof IPrimaryColors,
  value: primaryColors[key as keyof IPrimaryColors]
}));


export default class extends React.PureComponent<Props, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>

  constructor(props: Props) {
    super(props);
  }

  onChangePrimaryColor = async (color: keyof IPrimaryColors): Promise<void>  => {
    if(this.props.onChangeColorTheme)
      this.props.onChangeColorTheme();

    await this.context.setTheme!({...this.context.colors, primary: primaryColors[color]});
  }

  public render() {
    return (
      <BottomSheet ref={this.props.bottomSheetRef} height={BOTTOM_SHEET_HEIGH} closeOnDragDown={true}>
        <View style={styles.wrapper}>
          {themeColors.map((item, index) => (
            <ColorItem key={index}
                      item={item}
                      isDark={this.context.colorScheme == 'dark'}
                      isSelected={this.props.currentTheme === item.value}
                      onSelect={() => this.onChangePrimaryColor(item.key)}/>
          ))}
        </View>
      </BottomSheet>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});