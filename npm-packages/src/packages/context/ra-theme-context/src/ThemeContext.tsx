/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 13:06:30
 * @ Description: Theme Context.
 */

import React from 'react';

import { light } from './colors';
import { ThemeContextProps } from './types';

const ThemeContext = React.createContext<ThemeContextProps<any>>({colors: light} as ThemeContextProps<any>)
export const useThemeContext = () => React.useContext(ThemeContext);
export default ThemeContext;