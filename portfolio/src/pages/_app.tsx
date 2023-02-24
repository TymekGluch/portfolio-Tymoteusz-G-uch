import type { AppProps } from 'next/app';
import GlobalStyle from '@/GlobalStyle';
import { ThemeProvider } from '@/providers';
import { MainNavigation } from '@/componets/MainNavigation';
import React from 'react';
import { COLORS, DARK_THEME_COLORS } from '@/consts';
import { ThemeContext } from '@/contexts';
import { DefaultTheme } from 'styled-components';
import { Footer } from '@/componets/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);

  const theme = React.useMemo<DefaultTheme>(
    () => (isDarkTheme ? DARK_THEME_COLORS : COLORS),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <MainNavigation />

        <Component {...pageProps} />

        <Footer></Footer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
