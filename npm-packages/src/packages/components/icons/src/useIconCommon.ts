import { useMemo } from 'react';
import { useThemeState } from '@flexnative/theme-context';

import { useIcon } from "./IconProvider";
import { IconProps } from "./types";

export function useIconCommon(props: IconProps) {
  const {
    name,
    size = 'md',
    color = 'text',
    borderRadius,
    backgroundColor
  } = props;

  const icon = useIcon(name);
  const theme = useThemeState();

  return useMemo(() => {
    if (!icon) {
      console.error(`[@flexnative/icons] Icon "${name}" not found.`);
      return null;
    }

    const colorStyle = theme.colors[color as keyof typeof theme.colors] ?? color;
    const sizeStyle = theme.fontSize[size] ?? size;

    const borderRadiusStyle = borderRadius
      ? theme.borders.radius[borderRadius] ?? borderRadius
      : undefined;

    return {
      icon,
      style: {
        color: colorStyle,
        width: sizeStyle,
        height: sizeStyle,
        fontSize: sizeStyle,
        backgroundColor: backgroundColor ?? "transparent",
        borderRadius: borderRadiusStyle,
      }
    };
  }, [icon, theme, name, color, size, borderRadius, backgroundColor]);
}
