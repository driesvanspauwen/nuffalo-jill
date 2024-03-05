'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../ui/themes/theme';

export function Providers({ children }) {
  return (
    // <ChakraProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    // </ChakraProvider>
  )
}