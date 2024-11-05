/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-27 19:53:28
 * @ Description: Theme Context.
 */

import React from 'react';

import { light } from './colors';
import { ThemeContextProps } from './props';

const ThemeContext = React.createContext<ThemeContextProps<any>>({colors: light} as ThemeContextProps<any>)
export const useThemeContext = () => React.useContext(ThemeContext);
export default ThemeContext;