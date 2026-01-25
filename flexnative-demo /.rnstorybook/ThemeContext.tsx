import React, { createContext, useContext } from 'react';

// Define themes for your components.
// These can be as simple or complex as you need.
export const componentThemes = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#234a04ff',
    buttonBg: '#6d585cff',
    buttonTextColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#2a2a2a',
    textColor: '#f0f0f0',
    buttonBg: '#e51e10ff',
    buttonTextColor: '#ffffff',
  },
};

export const ThemeContext = createContext(componentThemes.light);

export const useComponentTheme = () => useContext(ThemeContext);

export const ComponentThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

