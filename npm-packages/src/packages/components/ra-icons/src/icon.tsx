import React from 'react';
import { Text } from 'react-native';
import { useThemeContext } from '@flexnative/theme-context';

import { icons, IconProps } from './props';
import createStyles from './styles';


export default React.memo((props: IconProps) => {
  const theme = useThemeContext();
  const { name, size, color, style, ...otherProps } = props;

  const styles = createStyles(
    {
      color: (theme.colors[color] ?? color) || theme.colors.text,
      size: (theme.fontSize[size] ?? size) || theme.fontSize.default
    },
  );

  return (<Text style={[styles.icon, style ]} {...otherProps}>{icons[name]}</Text>);
});