/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-08 20:26:00
 * @ Description: Icon component used to display icons using text characters.
 */

import React from 'react';
import { Text } from 'react-native';
import { useThemeContext } from '@flexnative/theme-context';

import { icons, IconProps } from './props';
import createStyles from './styles';


/**
 * A memoized functional component that renders an icon using the provided props.
 * 
 * @param {IconProps} props - The properties for the icon component.
 * @param {string} props.name - The name of the icon to be displayed.
 * @param {string} [props.size] - The size of the icon. Can be a predefined size from the theme or a custom size.
 * @param {string} [props.color] - The color of the icon. Can be a predefined color from the theme or a custom color.
 * @param {object} [props.style] - Additional styles to be applied to the icon.
 * @param {object} [props.otherProps] - Any other properties to be passed to the Text component.
 * 
 * @returns {JSX.Element} The rendered icon component.
 */
const IconComponent = (props: IconProps) => {
  const theme = useThemeContext();
  const { name, size = 'default', color = 'text', style, ...otherProps } = props;

  const styleProps = {
    color: (theme.colors[color] ?? color) || theme.colors.text,
    size: (theme.fontSize[size] ?? size) || theme.fontSize.default
  };

  const styles = createStyles(styleProps);

  return (
    <Text style={[styles.icon, style]} {...otherProps} >
      {icons[name]}
    </Text>
  );
};

export default React.memo(IconComponent);