'use client'

import React from 'react';
import { Typography } from '@mui/material';
import { alexBrushFont } from '../themes/global-theme'
import Paper from '@mui/material/Paper'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function LandingPage() {

  const landingPageTheme = createTheme({
    typography: {
      fontFamily: alexBrushFont.style.fontFamily,
    },
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
      <Paper>
        <Typography variant="h3">
          Test
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}