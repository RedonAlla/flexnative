/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 21:06:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 21:27:30
 * @ Description: The provided code defines a functional component named `HeaderActions` using TypeScript and React. This component is meant for use within a stack header, as indicated by the `NativeStackHeaderRightProps`. This component is designed to allow users to switch between light/dark themes and choose colors directly from the header using actions and dialogs.
 */

import React from "react";
import { StyleSheet, View } from 'react-native';
import { NativeStackHeaderRightProps } from '@react-navigation/native-stack';
import { useThemeContext } from "@flexnative/theme-context";
import BottomSheet from "@flexnative/bottom-sheet";
import { Action } from "@/components/layout/header";
import { isDark } from "@/utilities/theme.utilities";
import ThemeColorsDialog from "@/components/common/ThemeColorsDialog";


/**
 * This component is designed to allow users to switch between light/dark themes and choose colors directly from the header using actions and dialogs.
 * It uses NativeStackHeaderRightProps for type-checking.
 * 
 * @returns Functional component named HeaderActions
 */
export const HeaderActions: React.FC<NativeStackHeaderRightProps> = () => {
  
  const { colors, scheme, metrics, setColorScheme } = useThemeContext();
  const _isDark = isDark(scheme);
  const themeColorsDialogRef = React.useRef<BottomSheet>(null);

  const changeColorSchemeToggle = () => {
    setColorScheme!(_isDark ? 'light' : 'dark');
  }
  
  return(
    <View style={styles.container} >
      <Action icon={ _isDark ? 'sun' : 'moon'}
          backgroundColor='transparent'
          iconColor={colors.text!}
          overlayColor={colors.overlay}
          onClick={changeColorSchemeToggle}
      />
      <Action icon="color-palete"
          backgroundColor={`${colors.primary}${metrics.ghostOpacity}`}
          iconColor={colors.primary!}
          overlayColor={`${colors.primary}60`}
          onClick={() => themeColorsDialogRef.current!.open()}
      />

      <ThemeColorsDialog
        bottomSheetRef={themeColorsDialogRef}
        currentTheme={colors.primary}
        onChangeColorTheme={() => themeColorsDialogRef.current!.close()}
      />
    </View>
  );
}

/**
 * Define styles for the container of `HeaderActions`.
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: 'transparent',
    zIndex: 10
  }
});