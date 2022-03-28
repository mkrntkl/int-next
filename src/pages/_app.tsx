import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from '../features/layout';
import variables from '../styles/variables.module.scss';
import '../styles/globals.scss';
import React from 'react';

const customTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark,
    },
    secondary: {
      main: variables.secondaryMain,
      light: variables.secondaryLight,
      dark: variables.secondaryDark,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default appWithTranslation(MyApp);
