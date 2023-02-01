import { COLORS } from '@/consts';
import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

type Props = React.PropsWithChildren<{ theme?: Partial<typeof COLORS> }>;

const defaultTheme = COLORS;

const ThemeProvider: React.FC<Props> = ({ theme = defaultTheme, children }) => (
  <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
);

export { ThemeProvider, defaultTheme };
