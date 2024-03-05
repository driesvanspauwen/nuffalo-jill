'use client'

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

export default function LandingPage() {

  const landingPageTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'url("/homepage-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'orange',
          },
        },
      },
    },
  });
  
  return (
    <ThemeProvider theme={landingPageTheme}>
      <Paper></Paper>
    </ThemeProvider>
  );
}