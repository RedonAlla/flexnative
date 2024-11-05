import { Appearance, ColorSchemeName } from "react-native";
import { BaseColors, BaseTheme } from "./props";
import { dark, light } from "./colors";
import {
  BASE_SIZE,
  BORDER_RADIUS,
  BORDER_WIDTH,
  DISABLED_OPACITY,
  FONT_SIZE,
  GHOST_ACTIVE_TRANSPARENCY,
  GHOST_TRANSPARENCY,
  PADDING_HORIZONTAL_MULTIPLIER,
  PADDING_VERTICAL_MULTIPLIER
} from "./constants";

export function defaultColors(scheme: ColorSchemeName): BaseColors {
  return scheme === 'dark' ? dark : light;
}

export function defaultTheme() {
  const scheme = Appearance.getColorScheme();
  return {
    colors: defaultColors(scheme),
    scheme: scheme,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    fontSize: FONT_SIZE,
    metrics: {
      basSize: BASE_SIZE,
      disabledOpacity: DISABLED_OPACITY,
      ghostOpacity: GHOST_TRANSPARENCY,
      ghostActiveOpacity: GHOST_ACTIVE_TRANSPARENCY,
      verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
      horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
    }
  }
}

export function createTheme<TColors>(props: BaseTheme<TColors>) {
  const scheme = props.scheme ?? Appearance.getColorScheme();

  return {
    colors: props.colors ?? defaultColors(scheme),
    scheme: scheme,
    borderWidth: props.borderWidth ?? BORDER_WIDTH,
    borderRadius: props.borderRadius ?? BORDER_RADIUS,
    fontSize: props.fontSize ?? FONT_SIZE,
    metrics: Object.assign({},
      {
        basSize: BASE_SIZE,
        disabledOpacity: DISABLED_OPACITY,
        ghostOpacity: GHOST_TRANSPARENCY,
        ghostActiveOpacity: GHOST_ACTIVE_TRANSPARENCY,
        verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
        horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
      },
      props.metrics
    )
  }
}