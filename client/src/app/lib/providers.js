'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import globalTheme from '../ui/themes/global-theme';

export function Providers({ children }) {
  return (
    // <ChakraProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={globalTheme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    // </ChakraProvider>
  )
}