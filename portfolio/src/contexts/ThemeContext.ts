import React from 'react';
import { DefaultTheme } from 'styled-components';

type ThemeValue = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = React.createContext<ThemeValue>({
  isDarkTheme: false,
  setIsDarkTheme: () => false,
});

export { ThemeContext };
