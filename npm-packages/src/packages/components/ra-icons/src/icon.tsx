import React from 'react';
import { Text } from 'react-native';
import { useThemeContext } from '@flexnative/theme-context';

import { icons, IconProps } from './props';
import createStyles from './styles';


export default React.memo((props: IconProps) => {
  const appTheme = useThemeContext();
  const { name, size, color, style, ...otherProps } = props;

  const styles = createStyles(
    { color: color || appTheme.colors.text, size: size || 'normal' },
    appTheme.colors,
  );

  return (<Text style={[styles.icon, style ]} {...otherProps}>{icons[name]}</Text>);
});