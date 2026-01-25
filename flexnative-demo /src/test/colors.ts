import { light, dark } from '@flexnative/theme-context';
import { MyExtraColorsProps, MyThemeColors } from './props';

const extraColors: MyExtraColorsProps = {
  color1: '#C51162',
  color2: '#7B1FA2',
};

export const lightRedTheme: MyThemeColors = {
  ...light,
  
  // highlight-start
  // override primary color
  primary: '#FF0000',

  // additional custom colors
  ...extraColors,
  // highlight-end
}

export const lightBlueTheme: MyThemeColors = {
  ...light,
  // highlight-start
  // override primary color
  primary: '#00008B',

  // additional custom colors
  ...extraColors,
  // highlight-end
}

export const darkRedTheme: MyThemeColors = {
  ...dark,
  // highlight-start
  // override primary color
  primary: '#FF0000',

  // additional custom colors
  ...extraColors,
  // highlight-end
}

export const darkBlueTheme: MyThemeColors = {
  ...dark,
  // highlight-start
  // override primary color
  primary: '#00008B',

  // additional custom colors
  ...extraColors,
  // highlight-end
}